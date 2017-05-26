// @flow
import { combineReducers } from 'redux';
import type { Stack, Action } from './types';

export const reduceInput = (input: string = '', action: Action): string => {
  switch (action.type) {
    case 'USER_NUMERIC_INPUT':
      return `${input}${action.key.operand}`;
    case 'REMOVE_FROM_STACK':
      if (input.length > 0) {
        return input.slice(0, input.length - 1);
      }
      return input;
    default:
      return input;
  }
};

export const reduceStack = (stack: Stack = [], action: Action): Stack => {
  switch (action.type) {
    case 'ADD_TO_STACK':
      stack.push(action.value);
      return stack;
    case 'REMOVE_FROM_STACK':
      if (action.userInput === '') {
        stack.shift();
      }
      return stack;
    case 'USER_OPERATOR_INPUT':
      if (stack.length === 0) {
        return stack;
      } else if (action.key.arity === 1) {
        stack[0] = action.key.fn(stack[0]);
      } else if (action.key.arity === 2 && stack.length > 1) {
        stack[0] = action.key.fn(stack.shift(), stack[0]);
      }
      return stack;
    default:
      return stack;
  }
};

export default combineReducers({
  stack: reduceStack,
  input: reduceInput,
});
