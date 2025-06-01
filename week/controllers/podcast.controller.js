const Podcast = require('../models/podcast');
const { uploadAudio } = require('../utils/s3');

exports.createPodcast = async (req, res) => {
  const audio = await uploadAudio(req.file);
  const podcast = await Podcast.create({
    ...req.body,
    audioUrl: audio.Location,
    creator: req.user._id
  });
  res.status(201).json(podcast);
};

exports.getAll = async (req, res) => {
  const podcasts = await Podcast.find().populate('creator', 'username');
  res.json(podcasts);
};

exports.deletePodcast = async (req, res) => {
  await Podcast.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
