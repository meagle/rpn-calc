// @flow
import { generateOperands } from './keys';

type OperandKey = { keyValue: string, operand: string };

test('Operands structure is an array of objects', () => {
  const expected: { [string]: OperandKey } = {
    '1': {
      keyValue: '1',
      operand: '1',
    },
    '2': {
      keyValue: '2',
      operand: '2',
    },
    '3': {
      keyValue: '3',
      operand: '3',
    },
    '4': {
      keyValue: '4',
      operand: '4',
    },
    '5': {
      keyValue: '5',
      operand: '5',
    },
    '6': {
      keyValue: '6',
      operand: '6',
    },
    '7': {
      keyValue: '7',
      operand: '7',
    },
    '8': {
      keyValue: '8',
      operand: '8',
    },
    '9': {
      keyValue: '9',
      operand: '9',
    },
    '0': {
      keyValue: '0',
      operand: '0',
    },
    '.': {
      keyValue: '.',
      operand: '.',
    },
  };

  const actual: { [string]: OperandKey } = generateOperands();
  expect(actual).toEqual(expected);
});
