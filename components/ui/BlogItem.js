import React from 'react';
import DOM from 'react-dom-factories'; 
import Image from './Image';
import TextBox from './TextBox';

const BlogItem = (props) => (
  DOM.div(
    {},
    React.createElement(Image, props.image),
    React.createElement(TextBox, {text: props.text})
  )
);

export default BlogItem;
