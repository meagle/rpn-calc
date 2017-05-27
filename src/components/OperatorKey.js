// @flow
import React from 'react';
import { connect } from 'react-redux';
import compose from 'ramda/src/compose';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
import type { OperatorCalcKey, State } from '../types';
import * as actions from '../actions';
import '../css/CalculatorKey.css';

type Props = {
  calcKey: OperatorCalcKey,
  sendOperatorToStack: Function,
  userInput: string,
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

  _sendOperator = () => {
    console.log(this.props.calcKey.operator);
    this.props.sendOperatorToStack(this.props.calcKey, this.props.userInput);
  };
}

const mapStateToProps = (state: State) => ({
  userInput: state.input,
});

export { OperatorKey as RawOperatorKey };

export default compose(connect(mapStateToProps, actions))(OperatorKey);
