const express = require('express');

const router = express.Router();


router.get('/', (req, res, _) => {
  res.status(200).json({
    message: 'get request',
  });
});

router.post('/', (req, res, _) => {
  const post = {
    name: req.body.name,
    message: req.body.message,
  };
  res.status(200).json({
    message: 'post request',
    createdPost: post,
  });
});

module.exports = router;

// vim: et ts=2 sw=2 :
