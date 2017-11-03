import React from 'react';
import PropTypes from 'prop-types';
import Like from './Like';

const moment = require('moment');
moment.locale('ru');

const ItemMetaData = ({ author, dateCreate, dateEdit, likes }) => (
  <div>
    { author.name }
    &nbsp;|&nbsp;
    { dateCreate }
    &nbsp;|&nbsp;
    { dateEdit }
    &nbsp;|&nbsp;
    <Like likes={likes} />
  </div>
);

ItemMetaData.defaultProps = {
  author: {
    name: 'Undefined'
  },
  dateCreate: moment('1970-01-01').format('LL'),
  dateEdit: moment('1970-01-01').format('LL'),
  likes: 0
};

ItemMetaData.propTypes = {
  author: PropTypes.object,
  dateCreate: PropTypes.string,
  dateEdit: PropTypes.string,
  likes: PropTypes.number  
};

export default ItemMetaData;
