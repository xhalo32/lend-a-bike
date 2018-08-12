const mongoose = require('mongoose');

const memoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  text: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model('Memos', memoSchema);

// vim: et sw=2 ts=2 :
