import React from 'react';
import PropTypes from 'prop-types';

const Like = ({ likes, id, addLike }) => (
  <span>
    { likes }
    <a 
      href='#' style = {{ textDecoration: 'none' }}
      onClick={
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
          addLike(id);
        }
      }
    >
      &#10084;
    </a>
  </span>
);

Like.propTypes = {
  likes: PropTypes.number,
  id: PropTypes.number,
  addLike: PropTypes.func
};

Like.defaultProps = {
  likes: 0,
  id: -1,
  addLike: () => (null)
};

export default Like;
