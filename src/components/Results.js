// @flow
import React from 'react';
import { connect } from 'react-redux';
import StackItem from './StackItem';
import type { State, Stack } from '../types';

type Props = {
  stack: Stack,
  input: number,
};

const Results = ({ input, stack }: Props) => (
  <div>
    <ul>
      {stack.map((item, idx) => <StackItem key={idx} item={item} />)}
    </ul>
    {stack.length}
    {' : '}
    {input}
  </div>
);

const mapStateToProps = (state: State) => ({
  stack: state.stack,
  input: state.input,
});

export default connect(mapStateToProps)(Results);
