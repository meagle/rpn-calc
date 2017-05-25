// @flow
import { combineReducers } from 'redux';
import type { Stack, Action } from './types';

export const reduceStack = (stack: Stack = [], action: Action): Stack => {
  switch (action.type) {
    case 'USER_NUMERIC_INPUT':
      if (stack.length === 0) {
        return [{ value: action.key.operand, result: false }];
      } else if (!stack[0].result) {
        stack[0].value = Number(`${stack[0].value}${action.key.operand}`);
      }
      return stack;
    case 'USER_EXPRESSION_INPUT':
      if (stack.length === 0) {
        return stack;
      } else if (action.key.arity === 1) {
        stack[0] = { value: action.key.fn(stack[0].value), result: true };
      }
      return stack;
    default:
      return stack;
  }
};

export default combineReducers({
  stack: reduceStack,
});
