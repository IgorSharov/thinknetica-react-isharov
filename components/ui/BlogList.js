import React from 'react';
import DOM from 'react-dom-factories'; 
import BlogItem from './BlogItem';

import _ from 'lodash';

const BlogList = ({ items }) => {
  return DOM.div(
    null,
    _.map(
      items,
      (item, key) => (
        React.createElement(BlogItem, { key, ...item })
      )
    )
  );
};

export default BlogList;
