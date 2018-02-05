import { assign} from 'lodash';
import * as postsTypes from 'constants/actionTypes/PostsActionTypes';
import * as likesTypes from 'constants/actionTypes/LikesActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

function addLikeToPost(state, entryId) {
  const newEntries = state.entries.slice();
  newEntries.some(entry => {
    const match = entry.id === entryId;
    if (match) {
      entry.metaData.likes++;
    }
    return match;
  });
  return assign({}, initialState, { entries: newEntries });
}

export default function(state = initialState, action) {
  switch (action.type) {
    case postsTypes.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case postsTypes.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case postsTypes.FETCH_POSTS_SUCCEESS:
      return assign({}, initialState, { entries: action.response });
    case likesTypes.ADD_LIKE:
      return addLikeToPost(state, action.id);
    default: return state;
  }
}