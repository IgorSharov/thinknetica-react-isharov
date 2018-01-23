import PostHOC from 'components/hoc/PostHOC';
import { postsPath } from 'helpers/routes';

import { fetchPost } from 'actions/Post';

const Index = {
  path: postsPath(),
  component: PostHOC,
  prepareData: (store, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

export default [
  Index
];