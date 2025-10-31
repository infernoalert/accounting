import express, { Router } from 'express';
import * as authController from './auth.controller';
import * as authValidator from './auth.validator';

const router: Router = express.Router();

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

export default router;
