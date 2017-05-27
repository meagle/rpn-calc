// @flow

import type { Action, OperandCalcKey, OperatorCalcKey } from './types';

export const addInputToStack = (userInput: string): Action => ({
  type: 'ADD_TO_STACK',
  userInput,
});

export const removeFromStack = (userInput?: string): Action => ({
  type: 'REMOVE_FROM_STACK',
  userInput,
});

export const sendOperandToStack = (operandKey: OperandCalcKey): Action => {
  // TODO: add a check to ensure we only get [0-9]|\.
  return {
    type: 'USER_NUMERIC_INPUT',
    key: operandKey,
  };
};

export const sendOperatorToStack = (
  operatorKey: OperatorCalcKey,
  userInput: string
): Action => ({
  type: 'USER_OPERATOR_INPUT',
  key: operatorKey,
  userInput,
});
