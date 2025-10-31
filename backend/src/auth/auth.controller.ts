import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
// We will import the model, bcrypt, and jwt here when we write the logic

/**
 * Handles new user registration
 */
export const register = async (req: Request, res: Response): Promise<void> => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  // Placeholder logic
  const { email, password } = req.body;
  console.log('Registering user:', email);
  res.status(501).json({ message: `Register logic for ${email} not implemented` });
  // TODO:
  // 1. Check if user already exists (call auth.model.findUserByEmail)
  // 2. Hash the password (using bcryptjs)
  // 3. Save the new user to the DB (call auth.model.createUser)
  // 4. Return a JWT token
};

/**
 * Handles user login
 */
export const login = async (req: Request, res: Response): Promise<void> => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  // Placeholder logic
  const { email, password } = req.body;
  console.log('Logging in user:', email);
  res.status(501).json({ message: `Login logic for ${email} not implemented` });
  // TODO:
  // 1. Find user in DB (call auth.model.findUserByEmail)
  // 2. If user not found, return 400
  // 3. Compare password with hashed password (using bcryptjs)
  // 4. If passwords don't match, return 400
  // 5. Create and return a JWT token
};
