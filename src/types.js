// @flow
import type { Dispatch as ReduxDispatch } from 'redux';

export type OperatorCalcKey = {
  expressionKey: true,
  arity: number,
  operator: string,
  fn: <Operand>(...args: Operand) => Operand,
};

export type OperandCalcKey = {
  expressionKey: false,
  operand: number,
};

export type StackItem = {
  value: number,
};

export type CalcKey = OperandCalcKey | OperatorCalcKey;

export type MyFakeAction = {| type: 'MY_FAKE_ACTION' |};
export type MyFakeAction2 = {| type: 'MY_FAKE_ACTION2' |};

export type Action = MyFakeAction | MyFakeAction2;

export type State = {|
  stack: StackItem[],
|};

export type GetState = () => State;

export type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;

export type Dispatch = ReduxDispatch<Action> & Thunk<Action>;
