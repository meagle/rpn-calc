// @flow
import React from 'react';
import { connect } from 'react-redux';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
import type { OperandCalcKey, State } from '../types';
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
    this.props.sendOperandToStack(this.props.calcKey);
  };
}

export { OperandKey as RawOperandKey };

export default connect(null, actions)(OperandKey);
