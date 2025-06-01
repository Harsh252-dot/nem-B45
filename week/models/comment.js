const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  podcast: { type: mongoose.Schema.Types.ObjectId, ref: 'Podcast' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);
