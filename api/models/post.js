const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  text: String,
  sender: String,
});

module.exports = mongoose.model('Posts', postSchema);

// vim: et sw=2 ts=2 :
