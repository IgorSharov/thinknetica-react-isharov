import React from 'react';
import DOM from 'react-dom-factories'; 
import Image from './Image';
import TextBox from './TextBox';
import ItemMetaData from './ItemMetaData';

const BlogItem = ({ image, text, metaData }) => (
  DOM.div(
    {},
    React.createElement(Image, image),
    React.createElement(TextBox, { text: text }),
    React.createElement(ItemMetaData, metaData)
  )
);

export default BlogItem;
