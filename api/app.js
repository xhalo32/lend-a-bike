const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routePosts = require('./routes/posts');

const app = express();
const PREFIX = process.env.API_ROUTE_PREFIX;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define route middleware
app.use(`${PREFIX}/posts`, routePosts);

// Throw a new error when the route is not found
app.use((req, res, next) => {
  const error = new Error(`Route not found! \
${req.method} ${req.url} ${PREFIX}`);
  error.status = 404;
  next(error);
});

// Catch
app.use((err, req, res, _) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

module.exports = app;

// vim: et ts=2 sw=2 :
