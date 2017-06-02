// @flow
import type { OperandCalcKey, OperatorCalcKey } from './types';

const generateOperands = () => {
  return [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
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
  enter: {
    arity: 0,
    keyValue: 'Enter',
    operator: 'Enter',
    fn: a => a,
  },
  backspace: {
    arity: 0,
    keyValue: 'Backspace',
    operator: 'DEL',
    fn: a => a,
  },
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
    fn: (a, b) => b / a,
  },
  sqrt: {
    arity: 1,
    keyValue: 's',
    operator: 'sqrt',
    fn: n => Math.sqrt(n),
  },
  ex: {
    arity: 1,
    keyValue: 'e',
    operator: 'e^x',
    fn: n => Math.pow(Math.E, n),
  },
  tenx: {
    arity: 1,
    keyValue: 't',
    operator: '10^x',
    fn: n => Math.pow(10, n),
  },
  yx: {
    arity: 2,
    keyValue: 'y',
    operator: 'y^x',
    fn: (x, y) => Math.pow(y, x),
  },
  oneoverx: {
    arity: 1,
    keyValue: 'o',
    operator: '1/x',
    fn: x => 1 / x,
  },
  chs: {
    arity: 1,
    keyValue: 'c',
    operator: 'CHS',
    fn: x => x * -1,
  },
};
