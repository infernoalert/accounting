// Load environment variables from .env file
require('dotenv').config();

const express = require('express');

// Import routes
const authRoutes = require('./auth/auth.routes');
const transactionRoutes = require('./transactions/transactions.routes');
const ruleRoutes = require('./rules/rules.routes');

// App Initialization
const app = express();
const PORT = process.env.PORT || 3000;

// --- Global Middleware ---
// Parse JSON request bodies
app.use(express.json());

// --- API Routes ---
// Mount the routes for each module
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/rules', ruleRoutes);

// A simple "hello world" route
app.get('/', (req, res) => {
  res.send('Hello, your refactored Express server is running!');
});

// --- Server Start ---
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
