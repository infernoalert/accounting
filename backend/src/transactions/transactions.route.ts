import express, { Router } from 'express';
import * as txController from './transactions.controller';
// import * as txValidator from './transactions.validator';
// import authMiddleware from '../middleware/auth.middleware'; // We will create this later

// We'll use multer for file uploads
import multer from 'multer';
const upload = multer({ storage: multer.memoryStorage() }); // Store file in memory

const router: Router = express.Router();

// @route   POST /api/transactions/upload
// @desc    Upload a bank statement CSV
router.post(
  '/upload',
  // authMiddleware, // TODO: Protect this route
  upload.single('statement'), // 'statement' is the form field name for the file
  txController.uploadCsv
);

// @route   PUT /api/transactions/:id
// @desc    Update a transaction (e.g., set category or note)
router.put(
  '/:id',
  // authMiddleware, // TODO: Protect this route
  // txValidator.validateUpdate, // TODO: Add validation
  txController.updateTransaction
);

export default router;
