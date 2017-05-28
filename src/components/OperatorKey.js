// @flow
import React from 'react';
import { connect } from 'react-redux';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
import type { OperatorCalcKey, State } from '../types';
import * as actions from '../actions';
import '../css/CalculatorKey.css';

type Props = {
  calcKey: OperatorCalcKey,
  userInput: string,
  sendOperatorToStack: typeof actions.sendOperatorToStack,
  addInputToStack: typeof actions.addInputToStack,
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
    if (this.props.calcKey.operator === 'Enter') {
      this.props.addInputToStack(this.props.userInput);
    } else {
      this.props.sendOperatorToStack(this.props.calcKey, this.props.userInput);
    }
  };
}

const mapStateToProps = (state: State) => ({
  userInput: state.input,
});

export { OperatorKey as RawOperatorKey };

export default connect(mapStateToProps, actions)(OperatorKey);
