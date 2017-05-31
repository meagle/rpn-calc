// @flow
import React from 'react';
import '../css/Result.css';

type Props = {
  item: number,
};

const StackItem = ({ item }: Props) => (
  <li className="list-group-item">
    {item}
  </li>
);

export default StackItem;
