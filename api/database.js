const { MongoClient } = require('mongodb');
const assert = require('assert');

const url = 'mongodb://database:27017';

MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);
  console.log('Connected to mongodb database');

  client.close();
});

// vim: et ts=2 sw=2 :
