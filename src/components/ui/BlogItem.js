import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import TextBox from './TextBox';
import ItemMetaData from './ItemMetaData';
import Link from './Link';

import { Segment } from 'semantic-ui-react';

const moment = require('moment');
moment.locale('ru');

const BlogItem = ({ id, image, text, metaData }) => (
  React.createElement(
    Segment,
    {},
    React.createElement(Image, image),
    <Link to={`/posts/${id}`}> <TextBox text={text} /> </Link>,
    React.createElement(
      ItemMetaData,
      { ...metaData, id })
  )
);

BlogItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.object,
  text: PropTypes.string,
  metaData: PropTypes.object
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
  }
};

export default BlogItem;
