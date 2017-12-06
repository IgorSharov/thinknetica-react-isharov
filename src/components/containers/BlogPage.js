import React from 'react';
import DOM from 'react-dom-factories';

import { items as staticItems } from 'constants/static/items';

import BlogList from 'components/ui/BlogList';
import PieChart from 'components/ui/PieChart';

import _ from 'lodash';

const moment = require('moment');
moment.locale('ru');

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.like = this.like.bind(this);
    this.state = { items: staticItems };
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
    return DOM.div (
      {},
      React.createElement(BlogList, { 
        items, 
        onLikeClick: (id) => this.like(id) 
      }),
      React.createElement(PieChart, {
        columns:
          _.map(items,
            (item) => (('id' in item) && [item.text, item.metaData.likes])
          )
      })
    );
  }
}

export default BlogPage;
