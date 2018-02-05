import { assign} from 'lodash';
import * as postTypes from 'constants/actionTypes/PostActionTypes';
import * as likesTypes from 'constants/actionTypes/LikesActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

function addLikeToPost(state) {
  const newEntry = assign({}, state.entry);
  newEntry.metaData.likes++;
  return assign({}, initialState, { entry: newEntry });
}

export default function(state = initialState, action) {
  switch (action.type) {
    case postTypes.FETCH_POST_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case postTypes.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case postTypes.FETCH_POST_SUCCEESS:
      return assign({}, initialState, { entry: action.response });
    case likesTypes.ADD_LIKE:
      return state.entry && state.entry.id === action.id 
        ? addLikeToPost(state) 
        : state;
    default: return state;
  }
}