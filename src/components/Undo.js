import React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';

let Undo = ({ canUndo, onUndo }) => (
  <div className="Calc-key">
    <Button
      bsStyle="primary"
      bsSize="large"
      onClick={onUndo}
      disabled={!canUndo}
    >
      Undo
    </Button>
  </div>
);

const mapStateToProps = state => ({
  canUndo: state.stack.past.length > 0,
});

const mapDispatchToProps = dispatch => {
  return {
    onUndo: () => dispatch(UndoActionCreators.undo()),
  };
};

Undo = connect(mapStateToProps, mapDispatchToProps)(Undo);

export default Undo;
