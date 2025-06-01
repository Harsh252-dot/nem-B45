const Comment = require('../models/comment');
const Podcast = require('../models/podcast');

exports.addComment = async (req, res) => {
  const comment = await Comment.create({
    ...req.body,
    podcast: req.params.podcastId,
    user: req.user._id
  });
  await Podcast.findByIdAndUpdate(req.params.podcastId, { $inc: { 'stats.comments': 1 } });
  res.status(201).json(comment);
};
