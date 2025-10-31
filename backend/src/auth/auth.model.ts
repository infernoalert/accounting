const db = require('../config/db'); // Import the database connection

const findUserByEmail = async (email) => {
  // const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  // return rows[0];
  console.log(`Model: Would be finding user with email ${email}`);
  return null; // Placeholder
};

const createUser = async (email, passwordHash) => {
  // const { rows } = await db.query(
  //   'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email',
  //   [email, passwordHash]
  // );
  // return rows[0];
  console.log(`Model: Would be creating user with email ${email}`);
  return { id: 1, email: email }; // Placeholder
};

module.exports = {
  findUserByEmail,
  createUser,
};
