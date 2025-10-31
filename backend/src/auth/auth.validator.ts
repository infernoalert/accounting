import { body } from 'express-validator';

export const validateRegister = [
  body('email', 'Please include a valid email').isEmail().normalizeEmail(),
  body('password', 'Password must be at least 6 characters long').isLength({
    min: 6,
  }),
];

export const validateLogin = [
  body('email', 'Please include a valid email').isEmail().normalizeEmail(),
  body('password', 'Password is required').exists(),
];
