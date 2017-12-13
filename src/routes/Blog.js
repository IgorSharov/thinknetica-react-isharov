import BlogPage from 'components/containers/BlogPage';
import { rootPath } from 'helpers/routes';

const Index = {
  path: rootPath(),
  exact: true,
  component: BlogPage  
};

export default [
  Index
];