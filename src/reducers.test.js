// @flow
import { reduceInput, reduceStack } from './reducers';
import type { Stack, Action } from './types';

test('User can add new input', () => {
  const expected: string = '2';
  const actual: string = reduceInput(undefined, {
    type: 'USER_NUMERIC_INPUT',
    key: {
      operand: '2',
    },
  });
  expect(actual).toEqual(expected);
});

test('User can add decimal numbers', () => {
  const expected: string = '3.14';
  reduceInput('', {
    type: 'USER_NUMERIC_INPUT',
    key: {
      operand: '3',
    },
  });
  reduceInput('3', {
    type: 'USER_NUMERIC_INPUT',
    key: {
      operand: '.',
    },
  });
  reduceInput('3.', {
    type: 'USER_NUMERIC_INPUT',
    key: {
      operand: '1',
    },
  });
  const actual: string = reduceInput('3.1', {
    type: 'USER_NUMERIC_INPUT',
    key: {
      operand: '4',
    },
  });
  expect(actual).toEqual(expected);
});

test('Stack can add new input as a new stack item', () => {
  const expected: Stack = [3];

  const actual: Stack = reduceStack(
    [],
    ({
      type: 'ADD_TO_STACK',
      value: 3,
    }: Action)
  );

  expect(actual).toEqual(expected);
});

test('Stack can run a unary operation', () => {
  const expected: Stack = [8];

  const actual: Stack = reduceStack(
    [64],
    ({
      type: 'USER_OPERATOR_INPUT',
      key: {
        arity: 1,
        operator: 'sqrt',
        fn: n => Math.sqrt(n),
      },
    }: Action)
  );

  expect(actual).toEqual(expected);
});

test('Stack can run an operation with arity 2', () => {
  const expected: Stack = [12, 5];

  const actual: Stack = reduceStack(
    [3, 9, 5],
    ({
      type: 'USER_OPERATOR_INPUT',
      key: {
        arity: 2,
        operator: '+',
        fn: (a, b) => a + b,
      },
    }: Action)
  );

  expect(actual).toEqual(expected);
});
