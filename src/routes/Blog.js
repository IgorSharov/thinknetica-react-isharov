import BlogPageHOC from 'components/hoc/BlogPageHOC';
import { rootPath } from 'helpers/routes';

import { fetchPosts } from 'actions/Posts';

const Index = {
  path: rootPath(),
  exact: true,
  component: BlogPageHOC,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

export default [
  Index
];