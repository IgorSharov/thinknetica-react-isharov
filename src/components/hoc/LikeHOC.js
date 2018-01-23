import { connect } from 'react-redux';
import { flow } from 'lodash';

import Like from 'components/ui/Like'; 
import { addLike } from 'actions/Like'; 

const stateToProps = (state, props) => ({
  likes: props.likes,
  id: props.id
});

const dispatchToProps = (dispatch) => ({
  addLike: flow(addLike, dispatch) // (params) => dispatch(addLike(params))
});

export default connect(stateToProps, dispatchToProps)(Like);