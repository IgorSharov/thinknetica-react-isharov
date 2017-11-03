import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ text }) => (
  <span>{ text }</span>
  );

TextBox.defaultProps = {
  text: 'Default text'
};

export default TextBox;
