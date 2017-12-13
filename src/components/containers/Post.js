import React from 'react';
import PropTypes from 'prop-types';

import { Item } from 'semantic-ui-react';

import request from 'superagent';

import { postsPath } from 'helpers/routes';
import BlogItem from 'components/ui/BlogItem';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: null };
  }

  componentDidMount() {
    this.fetchPost(this.props.match.params.id);
  }

  fetchPost(id) {
    request.get(
      `http://localhost:3001${postsPath(id)}`,
      {},
      (err, res) => this.setState({ post: res.body })
    );
  }

  render() {
    const { post } = this.state;
    return (
      <Item.Group>
        <BlogItem { ...post } />
      </Item.Group>
    );
  }
}

Post.propTypes = {
  match: PropTypes.object
};

export default Post;
