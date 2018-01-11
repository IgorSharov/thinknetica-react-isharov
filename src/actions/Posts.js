import request from 'superagent';

import API_ROOT from 'constants/API';
import * as types from 'constants/actionTypes/PostsActionTypes';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const recievePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCEESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());
    return request
      .get(`${API_ROOT}/`)
      .end((err, response) => {
        err ? dispatch(errorPosts()) : dispatch(recievePosts(response.body));
      });
  };
}