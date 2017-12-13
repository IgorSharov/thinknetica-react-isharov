import Post from 'components/containers/Post';
import { postsPath } from 'helpers/routes';

const Index = {
  path: postsPath(),
  component: Post
};

export default [
  Index
];