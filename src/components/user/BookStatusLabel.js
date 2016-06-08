import React, { PropTypes } from 'react';

const BookStatusLabel = ({label, lblClass}) => {
  return (
    <span className={"label label-" + lblClass}>{label}</span>
  );
};

BookStatusLabel.propTypes = {
  label: PropTypes.string.isRequired,
  lblClass: PropTypes.string.isRequired
};

export default BookStatusLabel;
