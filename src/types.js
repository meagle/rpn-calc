// @flow
import type { Dispatch as ReduxDispatch } from 'redux';

export type OperatorCalcKey = {
  expressionKey: true,
  arity: number,
  operator: string,
  fn: (...args: Array<number>) => number,
};

export type OperandCalcKey = {
  expressionKey: false,
  operand: number,
};

export type CalcKey = OperandCalcKey | OperatorCalcKey;

export type StackItem = {
  value: number,
  result: boolean,
};
export type Stack = StackItem[];

export type UserNumericInputAction = {|
  type: 'USER_NUMERIC_INPUT',
  key: OperandCalcKey,
|};

export type UserExpressionInputAction = {|
  type: 'USER_EXPRESSION_INPUT',
  key: OperatorCalcKey,
|};

export type Action = UserNumericInputAction | UserExpressionInputAction;

export type State = {|
  stack: Stack,
|};

export type GetState = () => State;

export type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;

export type Dispatch = ReduxDispatch<Action> & Thunk<Action>;
