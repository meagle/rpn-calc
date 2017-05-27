import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { EnhancedUser } from './HOCAddDispatch';
import { OPERAND_KEYS, OPERATOR_KEYS } from './keys';
import OperandKey from './components/OperandKey.js';
import OperatorKey from './components/OperatorKey.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>RPN Calc</h2>
        </div>
        <p className="App-intro">
          This calcuator functions like an RPN calculator.
          This is a work in progress.  You can use Redux Tools
          to see this work until I can continue development and
          clean up the UI. [Screen here]
        </p>
        {/* <EnhancedUser name="Mark" status="active" /> */}
        {Object.keys(OPERAND_KEYS).map(key => (
          <OperandKey key={key} calcKey={OPERAND_KEYS[key]} />
        ))}

        {Object.keys(OPERATOR_KEYS).map(key => (
          <OperatorKey key={key} calcKey={OPERATOR_KEYS[key]} />
        ))}

      </div>
    );
  }
}

export default App;
