import React from 'react';
import PropTypes from 'prop-types';

import { Segment } from 'semantic-ui-react';

import Image from './Image';
import TextBox from './TextBox';
import ItemMetaData from './ItemMetaData';
import Link from './Link';

import { postsPath } from 'helpers/routes';

const moment = require('moment');
moment.locale('ru');

const BlogItem = ({ id, image, text, metaData }) => (
  <Segment>
    <Image {...image} />
    <Link to={postsPath(id)}>
      <TextBox text={text} />
    </Link>
    <ItemMetaData {...{...metaData, id}} />
  </Segment>
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
