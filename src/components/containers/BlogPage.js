import React from 'react';

import { Item } from 'semantic-ui-react';

import { map } from 'lodash';

import request from 'superagent';

import BlogList from 'components/ui/BlogList';
import PieChart from 'components/ui/PieChart';

const moment = require('moment');
moment.locale('ru');

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.like = this.like.bind(this);
    this.state = { items: [] };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001',
      {},
      (err, res) => this.setState({ items: res.body })
    );
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
    const { items } = this.state;
    return React.createElement(
      Item.Group,
      {},
      React.createElement(BlogList, { 
        items, 
        onLikeClick: (id) => this.like(id) 
      }),
      React.createElement(PieChart, {
        columns:
          map(items,
            (item) => ('id' in item) ? [item.text, item.metaData.likes] : []
          )
      })
    );
  }
}

export default BlogPage;
