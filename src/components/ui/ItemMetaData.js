import React from 'react';
import PropTypes from 'prop-types';
import LikeHOC from 'components/hoc/LikeHOC';

import { Flag } from 'semantic-ui-react';

const moment = require('moment');
moment.locale('ru');

const ItemMetaData = ({ author, dateCreate, dateEdit, likes, id }) => (
  <div>
    <Flag name= { author.country } />
    { author.name }
    &nbsp;|&nbsp;
    { dateCreate }
    &nbsp;|&nbsp;
    { dateEdit }
    &nbsp;|&nbsp;
    <LikeHOC
      likes = { likes }
      id = { id }
    />
  </div>
);

ItemMetaData.propTypes = {
  author: PropTypes.object,
  dateCreate: PropTypes.string,
  dateEdit: PropTypes.string,
  likes: PropTypes.number,
  id: PropTypes.number
};

ItemMetaData.defaultProps = {
  author: {
    name: 'Undefined'
  },
  dateCreate: moment('1970-01-01').format('LL'),
  dateEdit: moment('1970-01-01').format('LL'),
  likes: 0
};

export default ItemMetaData;
