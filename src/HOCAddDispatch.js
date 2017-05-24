import React from 'react';
import PropTypes from 'prop-types';

function FakeRedux() {
  return {
    connect: () => BaseComponent => props => (
      <BaseComponent
        {...props}
        dispatch={({ type }) => console.log(`${type} dispatched`)}
      />
    ),
  };
}

const { connect } = FakeRedux();

export const User = ({ name, status, dispatch }) => (
  <div
    className="User"
    role="button"
    tabIndex={0}
    onClick={() => dispatch({ type: 'USER_SELECTED' })}
  >
    {name}: {status}
  </div>
);

User.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  dispatch: PropTypes.func,
};

export const EnhancedUser = connect()(User);
// console.log(EnhancedUser)
