import React from 'react';
import DOM from 'react-dom-factories'; 
import Image from './Image';
import TextBox from './TextBox';

const BlogItem = ({ image, text }) => (
  DOM.div(
    {},
    React.createElement(Image, image),
    React.createElement(TextBox, { text: text })
  )
);

export default BlogItem;
