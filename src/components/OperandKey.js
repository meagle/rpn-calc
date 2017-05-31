// @flow
import React from 'react';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
import type { OperandCalcKey } from '../types';
import Button from 'react-bootstrap/lib/Button';
import '../css/CalculatorKey.css';

type Props = {
  calcKey: OperandCalcKey,
  sendOperandKey: OperandCalcKey => void,
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
        <Button bsStyle="primary" bsSize="large">
          {calcKey.operand}
        </Button>
      </div>
    );
  }

  _sendOperand = (e: SyntheticMouseEvent) => {
    e.preventDefault();
    this.props.sendOperandKey(this.props.calcKey);
  };
}

export default OperandKey;
