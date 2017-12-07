import React from 'react';
import DOM from 'react-dom-factories'; 
import PropTypes from 'prop-types';
import BlogItem from './BlogItem';

import { map } from 'lodash';

const globalSeq = { mockId: -1 };

const BlogList = ({ items, onLikeClick }) => DOM.div(
  null,
  map(
    items,
    (item) => (
      React.createElement(
        BlogItem, 
        { key: item.id ? item.id : globalSeq.mockId--, ...item, onLikeClick })
    )
  )
);

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onLikeClick: PropTypes.func
};

BlogList.defaultProps = {
  items: [{}, {}, {}],
  onLikeClick: () => (null)
};

export default BlogList;
