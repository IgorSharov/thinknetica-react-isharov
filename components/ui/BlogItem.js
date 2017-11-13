import React from 'react';
import DOM from 'react-dom-factories'; 
import PropTypes from 'prop-types';
import Image from './Image';
import TextBox from './TextBox';
import ItemMetaData from './ItemMetaData';

const moment = require('moment');
moment.locale('ru');

const BlogItem = ({ image, text, metaData }) => (
  DOM.div(
    {},
    React.createElement(Image, image),
    React.createElement(TextBox, { text }),
    React.createElement(ItemMetaData, metaData)
  )
);

BlogItem.propTypes = {
  image: PropTypes.object,
  text: PropTypes.string,
  metaData: PropTypes.object
};

BlogItem.defaultProps = {
  image: {
    url: 'https://image.flaticon.com/icons/png/512/1/1533.png',
    width: '35px',
    height: '35px',
    alt: 'image for blog item'
  },
  text: 'Default text',
  metaData: {
    author: {
      name: 'Undefined'
    },
    dateCreate: moment('1970-01-01').format('LL'),
    dateEdit: moment('1970-01-01').format('LL'),
    likes: 0
  }
};

export default BlogItem;
