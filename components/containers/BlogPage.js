import React from 'react';
import BlogList from '../ui/BlogList';

const blogItemsMocks = [
  {
    image: {
      url: 'https://image.flaticon.com/icons/png/512/1/1560.png', 
      width: '35px',
      height: '35px',
      alt: 'image for blog item 1'
    },
    text: 'Test text 1'
  },
  {
    image: {
      url: 'https://image.flaticon.com/icons/png/512/1/1561.png', 
      width: '35px',
      height: '35px',
      alt: 'image for blog item 2'
    },
    text: 'Test text 2'
  },
  {
    image: {
      url: 'https://image.flaticon.com/icons/png/512/1/1562.png', 
      width: '35px',
      height: '35px',
      alt: 'image for blog item 3'
    },
    text: 'Test text 3'
  }
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogItemsMocks };
  }
  
  render() {
    const { blogItemsMocks } = this.state
    return React.createElement(BlogList, { blogItemsMocks })
  }
}

export default BlogPage;
