import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
// import * as rulesModel from './rules.model';

export const createOrUpdateRule = (req: Request, res: Response): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  // const userId = req.user.id; // TODO: Get from auth token
  const { keyword, category, subCategory } = req.body;

  // Placeholder logic
  console.log('Controller: Creating/updating rule:', {
    keyword,
    category,
    subCategory,
  });
  res
    .status(501)
    .json({ message: 'Create/update rule logic not implemented' });

  // TODO:
  // 1. Call rulesModel.upsertRule({ userId, keyword, category, subCategory })
  // 2. Return the new/updated rule
};

export const getRules = (req: Request, res: Response): void => {
  // const userId = req.user.id; // TODO: Get from auth token

  // Placeholder logic
  console.log('Controller: Fetching rules');
  res.status(501).json({ message: 'Get rules logic not implemented' });

  // TODO:
  // 1. Call rulesModel.getRulesForUser(userId)
  // 2. Return the list of rules
};
