// @flow
import type { Dispatch as ReduxDispatch } from 'redux';

export type OperatorCalcKey = {|
  arity: number,
  operator: string,
  fn: (...args: Array<number>) => number,
|};

export type OperandCalcKey = {|
  operand: string,
|};

export type CalcKey = OperandCalcKey | OperatorCalcKey;

export type Stack = number[];

export type UserNumericInputAction = {|
  type: 'USER_NUMERIC_INPUT',
  key: OperandCalcKey,
|};

export type UserExpressionInputAction = {|
  type: 'USER_OPERATOR_INPUT',
  key: OperatorCalcKey,
|};

export type AddToStackAction = {|
  type: 'ADD_TO_STACK',
  value: number,
|};

export type Action =
  | UserNumericInputAction
  | UserExpressionInputAction
  | AddToStackAction;

export type State = {|
  stack: Stack,
|};

export type GetState = () => State;

export type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;

export type Dispatch = ReduxDispatch<Action> & Thunk<Action>;
