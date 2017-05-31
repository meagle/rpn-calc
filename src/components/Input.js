// @flow
import React from 'react';
import '../css/Input.css';
import classnames from 'classnames';

type Props = {
  input: number,
};

const Input = ({ input }: Props) => (
  <li
    className={classnames({
      Input: true,
    })}
  >
    {input ? input : '0'}
  </li>
);

export default Input;
