// @flow

import type { Action, OperandCalcKey, OperatorCalcKey } from './types';

export const addInputToStack = (input: number | string): Action => ({
  type: 'ADD_TO_STACK',
  value: Number(input),
});

export const removeFromStack = (currentInput?: string): Action => ({
  type: 'REMOVE_FROM_STACK',
  userInput: currentInput,
});

export const sendOperandToStack = (operandKey: OperandCalcKey): Action => {
  // TODO: add a check to ensure we only get [0-9]|\.
  return {
    type: 'USER_NUMERIC_INPUT',
    key: operandKey,
  };
};

export const sendOperatorToStack = (operatorKey: OperatorCalcKey): Action => ({
  type: 'USER_OPERATOR_INPUT',
  key: operatorKey,
});
