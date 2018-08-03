const express = require('express');
const mongoose = require('mongoose');

const Post = require('../models/post');

const router = express.Router();

router.get('/', (req, res, _) => {
  res.status(200).json({
    message: 'get request',
  });
});

router.post('/', (req, res, _) => {
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    text: req.body.message,
    sender: req.body.name,
  });
  post.save()
    .then((result) => {
      console.log(result);
    })
    .catch(err => console.error(err));
  res.status(200).json({
    message: 'post request',
    createdPost: post,
  });
});

module.exports = router;

// vim: et ts=2 sw=2 :
