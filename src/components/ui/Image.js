import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ url, width, height, alt }) => (
  <img src={ url } width={ width } height={ height } alt={ alt }></img>
);

Image.propTypes = {
  url: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string  
};

Image.defaultProps = {
  url: 'https://image.flaticon.com/icons/png/512/1/1533.png',
  width: '35px',
  height: '35px',
  alt: 'image for blog item'
};

export default Image;
