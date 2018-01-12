import Post from 'components/containers/Post';
import { postsPath } from 'helpers/routes';

import { fetchPost } from 'actions/Post';

const Index = {
  path: postsPath(),
  component: Post,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

export default [
  Index
];