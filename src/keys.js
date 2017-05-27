// @flow
import type { OperandCalcKey, OperatorCalcKey } from './types';

const generateOperands = () => {
  return [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.',
  ].reduce((acc, val) => {
    acc[val] = {
      keyValue: val,
      operand: val,
    };
    return acc;
  }, {});
};

export const OPERAND_KEYS: { [string]: OperandCalcKey } = generateOperands();

export const OPERATOR_KEYS: { [string]: OperatorCalcKey } = {
  add: {
    arity: 2,
    keyValue: '+',
    operator: '+',
    fn: (a, b) => a + b,
  },
  sub: {
    arity: 2,
    keyValue: '-',
    operator: '-',
    fn: (a, b) => b - a,
  },
  mult: {
    arity: 2,
    keyValue: '*',
    operator: '*',
    fn: (a, b) => a * b,
  },
  div: {
    arity: 2,
    keyValue: '/',
    operator: '/',
    fn: (a, b) => a / b,
  },
  sqrt: {
    arity: 1,
    operator: 'sqrt',
    keyValue: 's',
    fn: n => {
      return Math.sqrt(n);
    },
  },
};
