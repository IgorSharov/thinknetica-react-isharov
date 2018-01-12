import BlogPage from 'components/containers/BlogPage';
import { rootPath } from 'helpers/routes';

import { fetchPosts } from 'actions/Posts';

const Index = {
  path: rootPath(),
  exact: true,
  component: BlogPage,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

export default [
  Index
];