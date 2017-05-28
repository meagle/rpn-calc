// @flow
import React from 'react';
import '../css/Input.css';

type Props = {
  input: number,
};

const Input = ({ input }: Props) => <li className="Input">{input}</li>;

export default Input;
