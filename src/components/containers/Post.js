import React from 'react';
import PropTypes from 'prop-types';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/ui/BlogItem';
import { items as staticItems } from 'constants/static/items';

const Post = ({ match }) => (
  <Item.Group>
    <BlogItem { ...staticItems[match.params.id - 1] } />
  </Item.Group>
);

Post.propTypes = {
  match: PropTypes.object
};

export default Post;
