// @flow
import React from 'react';

type Props = {
  item: number,
};

const StackItem = ({ item }: Props) => (
  <li>
    {item}
  </li>
);

export default StackItem;
