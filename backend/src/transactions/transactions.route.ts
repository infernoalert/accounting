const express = require('express');
const router = express.Router();
const txController = require('./transactions.controller');
// const txValidator = require('./transactions.validator');
// const authMiddleware = require('../middleware/auth.middleware'); // We will create this later

// We'll use multer for file uploads
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() }); // Store file in memory

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

module.exports = router;
