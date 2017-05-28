// @flow
import React from 'react';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
import type { OperandCalcKey } from '../types';
import * as actions from '../actions';
import '../css/CalculatorKey.css';

type Props = {
  calcKey: OperandCalcKey,
  sendOperandToStack: typeof actions.sendOperandToStack,
};

class OperandKey extends React.Component<*, Props, *> {
  render() {
    const { calcKey } = this.props;
    return (
      <div className="Calc-key" onClick={this._sendOperand}>
        <KeyHandler
          keyEventName={KEYPRESS}
          keyValue={calcKey.operand}
          onKeyHandle={this._sendOperand}
        />
        <div>{calcKey.operand}</div>
      </div>
    );
  }

  _sendOperand = (e: SyntheticMouseEvent) => {
    e.preventDefault();
    this.props.sendOperandKey(this.props.calcKey);
  };
}

export default OperandKey;
