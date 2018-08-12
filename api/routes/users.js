const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const router = express.Router();
const { JWT_KEY } = process.env;

router.post('/signup', (req, res, _) => {
  User.find({
    email: req.body.email,
  })
    .then((users) => {
      if (users.length > 0) {
        res.status(409)
          .json({
            message: 'Mail already exists',
          });
      }
      bcrypt.hash(req.body.password, 10, (error, hash) => {
        if (error) {
          res.status(500)
            .json({
              error,
            });
        } else {
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash,
          });
          user.save()
            .then((result) => {
              res.status(200)
                .json(result);
            })
            .catch((saveError) => {
              res.status(500)
                .json({
                  error: saveError,
                });
            });
        }
      });
    })
    .catch((error) => {
      res.status(500)
        .json({
          error,
        });
    });
});

router.delete('/:userId', (req, res, _) => {
  User.remove({ _id: req.params.userId })
    .then(() => {
      res.status(200)
        .json({
          message: 'User removed',
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500)
        .json({
          error: err,
        });
    });
});

router.post('/login', (req, res, _) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (user === undefined) throw new Error('Unauthorized');

      return bcrypt.compare(req.body.password, user.password)
        .then((authorized) => {
          if (!authorized) throw new Error('Unauthorized');

          const token = jwt.sign({
            email: user.email,
            userId: user._id,
          }, JWT_KEY, {
            expiresIn: '1h',
          });

          res.status(200)
            .json({
              token,
              message: 'Authentication successful',
            });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(401)
        .json({
          message: 'Authentication failed',
        });
    });
});
module.exports = router;

// vim: et ts=2 sw=2 :
