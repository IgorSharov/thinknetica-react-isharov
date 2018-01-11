import request from 'superagent';

import API_ROOT from 'constants/API';
import * as types from 'constants/actionTypes/PostActionTypes';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const recievePost = (response) => ({
  type: types.FETCH_POST_SUCCEESS,
  response
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost());
    return request
      .get(`${API_ROOT}/${id}`)
      .end((err, response) => {
        err ? dispatch(errorPost()) : dispatch(recievePost(response.body));
      });
  };
}