import { body } from 'express-validator';

export const validateRule = [
  body('keyword', 'Keyword is required').not().isEmpty().isString(),
  body('category', 'Category is required').not().isEmpty().isString(),
  body('subCategory').optional().isString(),
];
