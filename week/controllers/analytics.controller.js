const Podcast = require('../models/podcast');

exports.getAnalytics = async (req, res) => {
  const podcast = await Podcast.findById(req.params.id);
  res.json(podcast.stats);
};
