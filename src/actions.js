// @flow

import type {
  UserNumericInputAction,
  UserExpressionInputAction,
  OperandCalcKey,
  OperatorCalcKey,
} from './types';

export const sendOperandToStack = (
  operand: OperandCalcKey
): UserNumericInputAction => ({
  type: 'USER_NUMERIC_INPUT',
  key: operand,
});

export const sendOperatorToStack = (
  operator: OperatorCalcKey
): UserExpressionInputAction => ({
  type: 'USER_OPERATOR_INPUT',
  key: operator,
});
