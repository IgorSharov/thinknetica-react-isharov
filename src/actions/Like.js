import * as types from 'constants/actionTypes/LikesActionTypes';

export const addLike = (id) => ({
  type: types.ADD_LIKE,
  id
});