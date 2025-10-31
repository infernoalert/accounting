import { Request, Response } from 'express';
// import { validationResult } from 'express-validator';
// import { parse } from 'csv-parse/sync';
// import crypto from 'crypto';
import '../types/multer';

/**
 * Handles the CSV upload process
 */
export const uploadCsv = (req: Request, res: Response): void => {
  if (!req.file) {
    res.status(400).json({ message: 'No CSV file uploaded.' });
    return;
  }

  // Placeholder logic
  console.log('Controller: Received file:', req.file.originalname);
  res.status(501).json({ message: 'CSV parsing and import not implemented' });

  // TODO:
  // 1. Get user ID from auth token (req.user.id)
  // 2. Get categorization rules (call rules.model.getRulesForUser)
  // 3. Parse the CSV buffer (req.file.buffer) using 'csv-parse'
  // 4. Loop through each row:
  //    a. Transform data (date, amount)
  //    b. Create transaction_hash
  //    c. Apply categorization rule
  //    d. Add to a "batch" array
  // 5. Call transactions.model.createManyTransactions with the batch
  // 6. Handle duplicate errors from the model
  // 7. Return success message
};

/**
 * Handles updates to a single transaction
 */
export const updateTransaction = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { category, subCategory, note } = req.body;
  // const userId = req.user.id; // TODO: Get from auth token

  // Placeholder logic
  console.log(`Controller: Updating transaction ${id} with:`, {
    category,
    subCategory,
    note,
  });
  res.status(501).json({ message: `Update logic for tx ${id} not implemented` });

  // TODO:
  // 1. Call transactions.model.updateTransaction(id, userId, { category, subCategory, note })
  // 2. Return the updated transaction
};
  