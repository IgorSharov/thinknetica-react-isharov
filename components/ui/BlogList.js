import React from 'react';
import DOM from 'react-dom-factories'; 
import PropTypes from 'prop-types';
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

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

BlogList.defaultProps = {
  items: [{}, {}, {}]
};

export default BlogList;
