// @flow
import React from 'react';
import { connect } from 'react-redux';
import StackItem from './StackItem';
import Input from './Input';
import type { State, Stack } from '../types';

type Props = {
  stack: Stack,
  input: number,
};

const Results = ({ input, stack }: Props) => (
  <div>
    <ul className="list-group">
      {stack
        .slice(0)
        .reverse()
        .map((item, idx) => <StackItem key={idx} item={item} />)}
      <Input input={input} />
    </ul>
  </div>
);

const mapStateToProps = (state: State) => ({
  stack: state.stack,
  input: state.input,
});

export default connect(mapStateToProps)(Results);
