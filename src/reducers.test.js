// @flow
import { reduceStack } from './reducers';
import type { Stack, Action } from './types';

test('Stack can take new user input', () => {
  const expected: Stack = [
    {
      value: 3,
      result: false,
    },
  ];

  const actual: Stack = reduceStack(
    [],
    ({
      type: 'USER_NUMERIC_INPUT',
      key: {
        expressionKey: false,
        operand: 3,
      },
    }: Action)
  );

  expect(actual).toEqual(expected);
});

test('Stack can append new user input to current stack item', () => {
  const expected: Stack = [
    {
      value: 35,
      result: false,
    },
  ];

  const actual: Stack = reduceStack(
    [
      {
        value: 3,
        result: false,
      },
    ],
    ({
      type: 'USER_NUMERIC_INPUT',
      key: {
        expressionKey: false,
        operand: 5,
      },
    }: Action)
  );

  expect(actual).toEqual(expected);
});

test('Stack can run a unary operation', () => {
  const expected: Stack = [
    {
      value: 8,
      result: true,
    },
  ];

  const actual: Stack = reduceStack(
    [
      {
        value: 64,
        result: false,
      },
    ],
    ({
      type: 'USER_EXPRESSION_INPUT',
      key: {
        expressionKey: true,
        arity: 1,
        operator: 'sqrt',
        fn: n => Math.sqrt(n),
      },
    }: Action)
  );

  expect(actual).toEqual(expected);
});
