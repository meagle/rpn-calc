// @flow
import React from 'react';
import { connect } from 'react-redux';
import compose from 'ramda/src/compose';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
import type { OperatorCalcKey, State } from '../types';
import * as actions from '../actions';

type Props = {
  calcKey: OperatorCalcKey,
  sendOperatorToStack: Function,
};

class OperatorKey extends React.Component<*, Props, *> {
  render() {
    const { calcKey } = this.props;
    return (
      <div>
        calcKey.keyValue &&
        <KeyHandler
          keyEventName={KEYPRESS}
          keyValue={calcKey.operator}
          onKeyHandle={this._sendOperator}
        />
        <span>{calcKey.operator}</span>
      </div>
    );
  }

  _sendOperator = () => {
    this.props.sendOperatorToStack(this.props.calcKey);
  };
}

const mapStateToProps = (state: State) => ({
  userInput: state.input,
});

export { OperatorKey as RawOperatorKey };

export default compose(connect(mapStateToProps, actions))(OperatorKey);
