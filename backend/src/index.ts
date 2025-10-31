// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';

// Import routes
import authRoutes from './auth/auth.route';
import transactionRoutes from './transactions/transactions.route';
import ruleRoutes from './rules/rules.route';

// App Initialization
const app = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10);

// --- Global Middleware ---
// Parse JSON request bodies
app.use(express.json());

// --- API Routes ---
// Mount the routes for each module
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/rules', ruleRoutes);

// A simple "hello world" route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, your refactored Express server is running!');
});

// --- Server Start ---
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

