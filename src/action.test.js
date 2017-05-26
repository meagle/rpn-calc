// @flow
import {
  addInputToStack,
  removeFromStack,
  sendOperandToStack,
  sendOperatorToStack,
} from './actions';

test('Sends an operand to the stack', () => {
  const expected = {
    type: 'USER_NUMERIC_INPUT',
    key: {
      operand: '5',
    },
  };

  const actual = sendOperandToStack({
    operand: '5',
  });
  expect(actual).toEqual(expected);
});

test('Sends an operator to the stack', () => {
  const actual = sendOperatorToStack({
    arity: 1,
    operator: 'sqrt',
    fn: n => {
      return Math.sqrt(n);
    },
  });
  expect(actual).toMatchSnapshot();
});

test('Adds the current input to the stack', () => {
  const expected = {
    type: 'ADD_TO_STACK',
    value: 42,
  };
  const actual = addInputToStack(42);
  expect(actual).toEqual(expected);

  const actual2 = addInputToStack('42');
  expect(actual2).toEqual(expected);
});

test('Removes from the stack or current input', () => {
  const expected = {
    type: 'REMOVE_FROM_STACK',
    userInput: '42',
  };
  const actual = removeFromStack('42');
  expect(actual).toEqual(expected);
});

test('Removes from the stack when there is no current input', () => {
  const expected = {
    type: 'REMOVE_FROM_STACK',
  };
  const actual = removeFromStack();
  expect(actual).toEqual(expected);
});
