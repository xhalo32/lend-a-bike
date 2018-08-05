const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  file: { type: Object, required: true },
});

module.exports = mongoose.model('Image', imageSchema);

// vim: et ts=2 sw=2 :
