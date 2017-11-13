import React from 'react';
import DOM from 'react-dom-factories'; 
import PropTypes from 'prop-types';
import Image from './Image';
import TextBox from './TextBox';
import ItemMetaData from './ItemMetaData';

const moment = require('moment');
moment.locale('ru');

const BlogItem = ({ id, image, text, metaData, onLikeClick }) => (
  DOM.div(
    {},
    React.createElement(Image, image),
    React.createElement(TextBox, { text }),
    React.createElement(ItemMetaData, { ...metaData, onLikeClick: () => onLikeClick(id) } )
  )
);

BlogItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.object,
  text: PropTypes.string,
  metaData: PropTypes.object,
  onLikeClick: PropTypes.func
};

BlogItem.defaultProps = {
  id: -1,
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
  },
  onLikeClick: () => (null)
};

export default BlogItem;
