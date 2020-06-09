import { getProfile} from './service';
//call action for get profile data
export const getProfileData = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_PROFILE_REQUEST',
    });
    try {
      return getProfile(params) // call service function
      .then((data) => {
        dispatch({
          type: 'GET_PROFILE_SUCCESS',
          payload: data.profile,
        });
        return data;
        console.log(data);
      })
    }
    catch (error) {
      // TODO: log error
      throw error;
    };
}
}






