import { assign } from 'lodash';
import * as types from 'constants/actionTypes/LikesActionTypes';

export default function(state = {}, action) {
  //new state
  const newState = assign({}, state);
  switch (action.type) {
    case types.ADD_LIKE:
      //update posts
      newState.posts.entries.some((post) => {
        const match =  post.id === action.id;
        if (match) {
          post.metaData.likes++;
        }
        return match;
      });
      return newState;
    default: return state;
  }
}