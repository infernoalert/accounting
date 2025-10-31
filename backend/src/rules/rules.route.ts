const express = require('express');
const router = express.Router();
const rulesController = require('./rules.controller');
const rulesValidator = require('./rules.validator');
// const authMiddleware = require('../middleware/auth.middleware'); // We will create this later

// @route   POST /api/rules
// @desc    Create or update a categorization rule
router.post(
  '/',
  // authMiddleware, // TODO: Protect this route
  rulesValidator.validateRule,
  rulesController.createOrUpdateRule
);

// @route   GET /api/rules
// @desc    Get all of a user's rules
router.get(
  '/',
  // authMiddleware, // TODO: Protect this route
  rulesController.getRules
);

module.exports = router;
