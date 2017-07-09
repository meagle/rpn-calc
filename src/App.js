// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import logo from './logo.svg';
import './css/App.css';
import { OPERAND_KEYS, OPERATOR_KEYS } from './keys';
import Undo from './components/Undo';
import Redo from './components/Redo';
import OperandKey from './components/OperandKey';
import OperatorKey from './components/OperatorKey';
import Results from './components/Results';
import type { State, OperatorCalcKey, OperandCalcKey } from './types';

type Props = {
  userInput: string,
  sendOperatorToStack: typeof actions.sendOperatorToStack,
  addInputToStack: typeof actions.addInputToStack,
  removeFromStack: typeof actions.removeFromStack,
  sendOperandToStack: typeof actions.sendOperandToStack,
};

class App extends Component<*, Props, *> {
  sendOperator = (calcKey: OperatorCalcKey) => {
    const { userInput } = this.props;
    switch (calcKey.keyValue) {
      case 'Enter':
        this.props.addInputToStack(userInput);
        break;
      case 'Backspace':
        this.props.removeFromStack(userInput);
        break;
      default:
        this.props.sendOperatorToStack(calcKey, userInput);
    }
    this.scrollToBottom();
  };

  sendOperand = (calcKey: OperandCalcKey) => {
    this.props.sendOperandToStack(calcKey);
    this.scrollToBottom();
  };
  scrollToBottom() {
    const resultPanel = document.getElementsByClassName('Result-panel')[0];
    resultPanel.scrollTop = resultPanel.scrollHeight;
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>RPN Calc</h2>
        </div>
        <p className="App-intro">
          This calcuator functions like an RPN calculator.
        </p>
        <Results />
        <div className="App-keys-container">
          <div className="App-operator-keys-container">
            {Object.keys(OPERATOR_KEYS).map(key => (
              <OperatorKey
                key={key}
                calcKey={OPERATOR_KEYS[key]}
                sendOperatorKey={this.sendOperator}
              />
            ))}
            <Undo />
            <Redo />
          </div>
          <div className="App-operand-keys-container">
            {Object.keys(OPERAND_KEYS).map(key => (
              <OperandKey
                key={key}
                calcKey={OPERAND_KEYS[key]}
                sendOperandKey={this.sendOperand}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  userInput: state.input,
});

export default connect(mapStateToProps, actions)(App);
