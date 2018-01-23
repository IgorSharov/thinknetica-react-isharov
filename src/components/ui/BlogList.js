import React from 'react';
import DOM from 'react-dom-factories'; 
import PropTypes from 'prop-types';
import BlogItem from 'components/ui/BlogItem';

import { map } from 'lodash';

const globalSeq = { mockId: -1 };

const BlogList = ({ items }) => DOM.div(
  null,
  map(
    items,
    (item) => (
      React.createElement(
        BlogItem, 
        { key: item.id ? item.id : globalSeq.mockId--, ...item })
    )
  )
);

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

BlogList.defaultProps = {
  items: [{}, {}, {}]
};

export default BlogList;
