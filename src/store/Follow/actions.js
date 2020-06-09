import { getProfile} from './service';

import {getFollow} from './service';
//action for follow data
export const getFollowData = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_FOLLOW_REQUEST',
    });
    try {
      return getFollow(params)
      .then((data) => {
        dispatch({
          type: 'GET_FOLLOW_SUCCESS',
          payload: data.follow,
        });
        return data;
      })
    }
    catch (error) {
      // TODO: log error
      throw error;
    };
}
}






