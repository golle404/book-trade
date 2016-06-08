import React, { PropTypes } from 'react';

const BookActionButton = ({btnLabel, btnClass, btnName, onBookAction}) => {
  return (
    <button
      type="button"
      className={"btn " + btnClass}
      onClick={onBookAction}
      name={btnName} >
        {btnLabel}
      </button>
  );
};

BookActionButton.propTypes = {
  btnLabel: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
  onBookAction: PropTypes.func
};

export default BookActionButton;
