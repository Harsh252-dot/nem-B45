const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/auth.middleware');
const { authorizeRoles } = require('../middlewares/role.middleware');
const { getAnalytics } = require('../controllers/analytics.controller');

// Get analytics for a specific podcast (creator/admin only)
router.get('/:id', authenticate, authorizeRoles('creator', 'admin'), getAnalytics);

module.exports = router;
