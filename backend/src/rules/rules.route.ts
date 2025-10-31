import express, { Router } from 'express';
import * as rulesController from './rules.controller';
import * as rulesValidator from './rules.validator';
// import authMiddleware from '../middleware/auth.middleware'; // We will create this later

const router: Router = express.Router();

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

export default router;
