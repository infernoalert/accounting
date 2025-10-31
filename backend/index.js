// --- Imports ---
const express = require('express');

// --- App Initialization ---
const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 by default

// --- Middleware ---
// This middleware allows our app to parse JSON request bodies
app.use(express.json());

// --- Routes ---
/**
 * A simple "hello world" route to test that the server is working.
 * When you go to http://localhost:3000/ in your browser, you'll see this.
 */
app.get('/', (req, res) => {
  res.send('Hello, your Express server is running!');
});

/**
 * A placeholder for our future CSV upload endpoint.
 */
app.post('/api/upload', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

/**
 * A placeholder for creating categorization rules.
 */
app.post('/api/rules', (req, res) => {
  res.status(501).json({ message: 'Not implemented yet' });
});

/**
 * A placeholder for updating a transaction.
 */
app.put('/api/transactions/:id', (req, res) => {
  res.status(501).json({ message: `Not implemented yet for ID ${req.params.id}` });
});


// --- Server Start ---
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});