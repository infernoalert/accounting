const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
const authValidator = require('./auth.validator');

// @route   POST /api/auth/register
// @desc    Register a new user
router.post(
  '/register',
  authValidator.validateRegister, // Validation middleware
  authController.register
);

// @route   POST /api/auth/login
// @desc    Login a user and get a JWT token
router.post(
  '/login',
  authValidator.validateLogin, // Validation middleware
  authController.login
);

module.exports = router;
