import PostContainer from 'components/hoc/PostContainer';
import { postsPath } from 'helpers/routes';

import { fetchPost } from 'actions/Post';

const Index = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

export default [
  Index
];