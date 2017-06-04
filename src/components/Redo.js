import React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';

let Redo = ({ canRedo, onRedo }) => (
  <div className="Calc-key">
    <Button
      bsStyle="primary"
      bsSize="large"
      onClick={onRedo}
      disabled={!canRedo}
    >
      Redo
    </Button>
  </div>
);

const mapStateToProps = state => ({
  canRedo: state.stack.future.length > 0,
});

const mapDispatchToProps = dispatch => {
  return {
    onRedo: () => dispatch(UndoActionCreators.redo()),
  };
};

Redo = connect(mapStateToProps, mapDispatchToProps)(Redo);

export default Redo;
