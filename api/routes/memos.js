const express = require('express');
const mongoose = require('mongoose');

const Memo = require('../models/memo');
const auth = require('../auth');

const router = express.Router();

router.get('/', (req, res, _) => {
  Memo.find()
    .select('_id text owner')
    .then((memos) => {
      res.status(200)
        .json(memos);
    })
    .catch((error) => {
      res.status(500)
        .json({
          error,
        });
    });
});

router.get('/:memoId', (req, res, _) => {
  Memo.findOne({
    _id: req.params.memoId,
  })
    .select('_id text owner')
    .then((memo) => {
      res.status(200)
        .json(memo);
    })
    .catch((error) => {
      res.status(500)
        .json({
          error,
        });
    });
});

router.post('/', auth, (req, res, _) => {
  const memo = new Memo({
    _id: new mongoose.Types.ObjectId(),
    text: req.body.text,
    owner: req.tokenData.userId,
  });
  memo.save()
    .then((result) => {
      res.status(200)
        .json(result);
    })
    .catch((error) => {
      res.status(500)
        .json({
          error,
        });
    });
});

router.patch('/:memoId', auth, (req, res, _) => {
  Memo.findOne({
    _id: req.params.memoId,
  })
    .then((memo) => {
      if (String(memo.owner) !== String(req.tokenData.userId)) {
        res.status(401)
          .json({
            message: 'You are unauthorized to change this memo!',
          });
      } else {
        Memo.update(memo, req.body)
          .then((result) => {
            res.status(200)
              .json(result);
          })
          .catch((error) => {
            res.status(500).json({
              error,
            });
          });
      }
    })
    .catch((error) => {
      res.status(400)
        .json({
          message: error,
        });
    });
});

module.exports = router;

// vim: et ts=2 sw=2 :
