const express = require('express');
const mongoose = require('mongoose');

const Post = require('../models/post');

const router = express.Router();

router.get('/', (req, res, _) => {
  Post.find()
    .select('_id sender text')
    .then((result) => {
      res.status(200)
        .json(result);
    })
    .catch((error) => {
      console.error(error);
      res.status(500)
        .json({
          error,
        });
    });
});

router.get('/:postId', (req, res, _) => {
  Post.findOne({
    _id: req.params.postId,
  })
    .select('_id sender text')
    .then((result) => {
      res.status(200)
        .json(result);
    })
    .catch((error) => {
      console.error(error);
      res.status(500)
        .json({
          error,
        });
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
      res.status(200)
        .json({
          message: 'post request',
          createdPost: post,
        });
    })
    .catch(err => console.error(err));
});

router.patch('/:postId', (req, res, _) => {
  const id = req.params.postId;
  console.log(id, req.body);
  Post.update({
    _id: id,
  }, req.body)
    .then((result) => {
      console.log(result);
      res.status(200)
        .json(result);
    })
    .catch((error) => {
      res.status(500)
        .json(error);
    });
  Post.findOne({ _id: id })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
});

module.exports = router;

// vim: et ts=2 sw=2 :
