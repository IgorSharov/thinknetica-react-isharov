import React from 'react';
import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';

const moment = require('moment');
moment.locale('ru');

const blogItemsMocks = [
  {
    id: 1,
    image: {
      url: 'https://image.flaticon.com/icons/png/512/1/1560.png', 
      width: '35px',
      height: '35px',
      alt: 'image for blog item 1'
    },
    text: 'Test text 1',
    metaData: {
      author: {
          name: 'User 1'
      },
      dateCreate: moment('2013-02-01').format('LL'),
      dateEdit: moment('2013-02-02').format('LL'),
      likes: 1
    } 
  },
  {
    id: 2,
    image: {
      url: 'https://image.flaticon.com/icons/png/512/1/1561.png', 
      width: '35px',
      height: '35px',
      alt: 'image for blog item 2'
    },
    text: 'Test text 2',
    metaData: {
      author: {
          name: 'User 2'
      },
      dateCreate: moment('2014-03-02').format('LL'),
      dateEdit: moment('2014-03-03').format('LL'),
      likes: 2
    } 
  },
  {}
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.like = this.like.bind(this);
    this.state = { items: blogItemsMocks };
  }
  
  like(id) {
    this.setState((prevState) => {
      let newItems = JSON.parse(JSON.stringify(prevState.items));
      let item = newItems.filter((itm) => (itm.id === id))[0];
      item && item.metaData.likes++;
      return { items: newItems };
    });       
  }
  
  render() {
    const { items } = this.state;
    return DOM.div (
      {},
      React.createElement(BlogList, { items, onLikeClick: (id) => this.like(id) }),
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
