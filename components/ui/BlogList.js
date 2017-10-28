import React from 'react';
import DOM from 'react-dom-factories'; 
import _ from 'lodash';
import BlogItem from './BlogItem';

const BlogList = ({ blogItemsMocks }) => {
  return DOM.div(
    null,
    _.map(
      blogItemsMocks,
      (item, key) => (
        React.createElement(BlogItem, { key, text: item.text, image: item.image })
      )
    )
  )
};

export default BlogList;
