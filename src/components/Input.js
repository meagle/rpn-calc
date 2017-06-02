// @flow
import React from 'react';
import '../css/Input.css';

type Props = {
  input: number,
};

const Input = ({ input }: Props) => (
  <li className="list-group-item Input">
    {input ? input : '0'}
  </li>
);

export default Input;
