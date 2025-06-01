const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
  title: String,
  description: String,
  audioUrl: String,
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  stats: {
    plays: { type: Number, default: 0 },
    downloads: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
    subscriptions: { type: Number, default: 0 }
  }
});

module.exports = mongoose.model('Podcast', podcastSchema);
