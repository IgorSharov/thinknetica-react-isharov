import React from 'react';
import PropTypes from 'prop-types';

const Like = (props) => (
  <span>
    { props.likes }
    <a 
      href='#' style = {{ textDecoration: 'none' }}
      onClick = { props.onClick }
    >
      &#10084;
    </a>
  </span>
)

Like.propTypes = {
  likes: PropTypes.number,
  onClick: PropTypes.func
};

Like.defaultProps = {
  likes: 0,
  onClick: () => (null)
};

export default Like;
