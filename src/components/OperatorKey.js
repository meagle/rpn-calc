// @flow
import React from 'react';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
import type { OperatorCalcKey } from '../types';
import '../css/CalculatorKey.css';

type Props = {
  calcKey: OperatorCalcKey,
  sendOperatorKey: OperatorCalcKey => void,
};

class OperatorKey extends React.Component<*, Props, *> {
  render() {
    const { calcKey } = this.props;
    return (
      <div className="Calc-key" onClick={this._sendOperator}>
        {calcKey.keyValue &&
          <KeyHandler
            keyEventName={KEYPRESS}
            keyValue={calcKey.keyValue}
            onKeyHandle={this._sendOperator}
          />}
        <span>{calcKey.operator}</span>
      </div>
    );
  }

  _sendOperator = (e: SyntheticMouseEvent) => {
    e.preventDefault();
    this.props.sendOperatorKey(this.props.calcKey);
  };
}

export default OperatorKey;
