// const db = require('../config/db');

const getRulesForUser = async (userId) => {
    // const { rows } = await db.query(
    //   'SELECT keyword, category, sub_category FROM categorization_rules WHERE user_id = $1',
    //   [userId]
    // );
    // return rows;
    console.log(`Model: Would be fetching rules for user ${userId}`);
    return []; // Placeholder
  };
  
  const upsertRule = async (rule) => {
    const { userId, keyword, category, subCategory } = rule;
    // This "upsert" command is perfect for your "training" requirement.
    // const { rows } = await db.query(
    //   `INSERT INTO categorization_rules (user_id, keyword, category, sub_category)
    //    VALUES ($1, $2, $3, $4)
    //    ON CONFLICT (user_id, keyword)
    //    DO UPDATE SET category = $3, sub_category = $4
    //    RETURNING *`,
    //   [userId, keyword.toLowerCase(), category, subCategory]
    // );
    // return rows[0];
    console.log(`Model: Would be upserting rule with keyword ${keyword}`);
    return rule; // Placeholder
  };
  
  module.exports = {
    getRulesForUser,
    upsertRule,
  };
  