import React from 'react';
import PropTypes from 'prop-types';

import { Item } from 'semantic-ui-react';

import { map } from 'lodash';

import BlogList from 'components/ui/BlogList';
import PieChart from 'components/ui/PieChart';

const BlogPage = ({ items }) => (
  <Item.Group>
    <BlogList items={items} />
    <PieChart 
      columns = {map(items,
        (item) => ('id' in item)
          ? [item.text, item.metaData.likes]
          : [])}
    />
  </Item.Group>
);

BlogPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default BlogPage;
