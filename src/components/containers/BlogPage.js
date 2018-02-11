import React from 'react';

import { Item } from 'semantic-ui-react';

import BlogListHOC from 'components/hoc/BlogListHOC';
import PieChartHOC from 'components/hoc/PieChartHOC';

const BlogPage = () => (
  <Item.Group>
    <BlogListHOC />
    <PieChartHOC />
  </Item.Group>
);

export default BlogPage;
