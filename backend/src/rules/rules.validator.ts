const { body } = require('express-validator');

const validateRule = [
  body('keyword', 'Keyword is required').not().isEmpty().isString(),
  body('category', 'Category is required').not().isEmpty().isString(),
  body('subCategory').optional().isString(),
];

module.exports = {
  validateRule,
};
