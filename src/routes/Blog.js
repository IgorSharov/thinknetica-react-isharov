import PostsContainer from 'components/hoc/PostsContainer';
import { rootPath } from 'helpers/routes';

import { fetchPosts } from 'actions/Posts';

const Index = {
  path: rootPath(),
  exact: true,
  component: PostsContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

export default [
  Index
];