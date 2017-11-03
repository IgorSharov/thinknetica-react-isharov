import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const { bind } = _;

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.likes };
    this.handleClick = bind(this.handleClick, this);
  }
  
  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }
  
  render() {
    return (
      <span>
        { this.state.count }
        <a 
          href='#' style = {{ textDecoration: 'none' }}
          onClick = { this.handleClick }
        >
          &#10084;
        </a>
      </span>
    )
  }
}

Like.propTypes = {
  likes: PropTypes.number
};

Like.defaultProps = {
  likes: 0
};

export default Like;
