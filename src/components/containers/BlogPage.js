import React from 'react';
import PropTypes from 'prop-types';

import { Item } from 'semantic-ui-react';

import { map } from 'lodash';

import BlogList from 'components/ui/BlogList';
import PieChart from 'components/ui/PieChart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.like = this.like.bind(this);
  }
  
  like(id) {
    this.setState((prevState) => {
      const newItems = JSON.parse(JSON.stringify(prevState.items));
      const item = newItems.filter((itm) => (itm.id === id))[0];
      item && item.metaData.likes++;
      return { items: newItems };
    });       
  }
  
  render() {
    const { items } = this.props;
    return React.createElement(
      Item.Group,
      {},
      React.createElement(BlogList,
        { key: 0, items, onLikeClick: (id) => this.like(id) }),
      React.createElement(PieChart,
        { key: 1,
          columns: map(items,
            (item) => ('id' in item)
              ? [item.text, item.metaData.likes]
              : [])
        })
    );
  }
}

BlogPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default BlogPage;
