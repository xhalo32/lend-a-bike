const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');

const Image = require('../models/image');
const auth = require('../auth');

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/');
  },
  filename: (req, file, cb) => {
    cb(null, `${new Date().toISOString()}_${file.originalname}`);
  },
});
const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 20,
  },
  fileFilter: (req, file, cb) => {
    cb(null, file.mimetype === 'image/jpeg');
  },
});

router.get('/', (req, res, _) => {
  Image.find()
    .select('_id file')
    .then((results) => {
      res.status(200)
        .json(results);
    })
    .catch((error) => {
      console.error(error);
      res.status(500)
        .json({
          error,
        });
    });
});

router.post('/', auth, (req, res, next) => {
  console.log(`${req.tokenData.email} uploaded an image!`);
  next();
}, upload.single('image'), (req, res, _) => {
  new Image({
    _id: new mongoose.Types.ObjectId(),
    file: req.file,
  })
    .save()
    .then((result) => {
      res.status(201)
        .json(result);
    })
    .catch((error) => {
      res.status(400)
        .json({
          error: error.toString(),
        });
      console.log(error);
    });
});

module.exports = router;

// vim: et ts=2 sw=2 :
