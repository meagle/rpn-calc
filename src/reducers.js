// @flow
import { combineReducers } from 'redux';
import undoable from 'redux-undo';
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
    case 'USER_OPERATOR_INPUT':
    case 'ADD_TO_STACK':
      return '';
    default:
      return input;
  }
};

export const reduceStack = (stack: Stack = [], action: Action): Stack => {
  switch (action.type) {
    case 'ADD_TO_STACK':
      return [Number(action.userInput), ...stack.slice(0, stack.length)];
    case 'REMOVE_FROM_STACK':
      if (!action.userInput && stack.length > 0) {
        stack = stack.slice(1, stack.length);
      }
      return stack;
    case 'USER_OPERATOR_INPUT':
      const { userInput } = action;
      if (action.key.arity === 1 && userInput) {
        stack = [action.key.fn(Number(userInput)), ...stack];
      } else if (action.key.arity === 1) {
        stack = [action.key.fn(stack[0]), ...stack.slice(1, stack.length)];
      } else if (action.key.arity === 2 && stack.length > 0 && userInput) {
        stack = [
          action.key.fn(Number(userInput), stack[0]),
          ...stack.slice(1, stack.length),
        ];
      } else if (action.key.arity === 2 && stack.length > 1) {
        stack = [
          action.key.fn(stack.shift(), stack[0]),
          ...stack.slice(1, stack.length),
        ];
      }
      return stack;
    default:
      return stack;
  }
};

export default combineReducers({
  stack: undoable(reduceStack),
  input: reduceInput,
});
