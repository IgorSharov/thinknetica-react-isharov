import React from 'react';

const Image = ({ url, width, height, alt }) => (
  <img src={ url } width={ width } height={ height } alt={ alt }></img>
  );

export default Image;
