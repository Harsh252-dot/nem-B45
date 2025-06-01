const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/auth.middleware');
const { addComment } = require('../controllers/comment.controller');

// Add a comment to a podcast (authenticated users only)
router.post('/:podcastId', authenticate, addComment);

module.exports = router;
