// @flow
import { sendOperandToStack, sendOperatorToStack } from './actions';

test('Sends an operand to the stack', () => {
  const expected = {
    type: 'USER_NUMERIC_INPUT',
    key: {
      operand: 5,
    },
  };

  const actual = sendOperandToStack({
    operand: 5,
  });
  expect(actual).toEqual(expected);
});

test('Sends an operator to the stack', () => {
  const actual = sendOperatorToStack({
    arity: 1,
    operator: 'sqrt',
    fn: n => {
      return Math.sqrt(n);
    },
  });
  expect(actual).toMatchSnapshot();
});
