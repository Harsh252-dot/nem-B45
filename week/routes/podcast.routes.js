const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer.middleware');
const { authenticate } = require('../middlewares/auth.middleware');
const { authorizeRoles } = require('../middlewares/role.middleware');
const {
  createPodcast,
  getAll,
  deletePodcast
} = require('../controllers/podcast.controller');

// Public route
router.get('/', getAll);

// Protected routes for creators
router.post(
  '/',
  authenticate,
  authorizeRoles('creator', 'admin'),
  upload.single('audio'),
  createPodcast
);

router.delete(
  '/:id',
  authenticate,
  authorizeRoles('creator', 'admin'),
  deletePodcast
);

module.exports = router;
