import React from 'react';
import PropTypes from 'prop-types';
import Like from './Like';

import { Flag } from 'semantic-ui-react';

const moment = require('moment');
moment.locale('ru');

const ItemMetaData = ({ author, dateCreate, dateEdit, likes, onLikeClick }) => (
  <div>
    <Flag name= { author.country } />
    { author.name }
    &nbsp;|&nbsp;
    { dateCreate }
    &nbsp;|&nbsp;
    { dateEdit }
    &nbsp;|&nbsp;
    <Like 
      likes = { likes } 
      onClick = { (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        onLikeClick();
      }}
    />
  </div>
);

ItemMetaData.propTypes = {
  author: PropTypes.object,
  dateCreate: PropTypes.string,
  dateEdit: PropTypes.string,
  likes: PropTypes.number,
  onLikeClick: PropTypes.func
};

ItemMetaData.defaultProps = {
  author: {
    name: 'Undefined'
  },
  dateCreate: moment('1970-01-01').format('LL'),
  dateEdit: moment('1970-01-01').format('LL'),
  likes: 0,
  onLikeClick: () => (null)
};

export default ItemMetaData;
