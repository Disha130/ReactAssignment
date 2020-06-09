import { loginService, signUpService } from './service';
//Action for login
export const login = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN_REQUEST',
    });
    try {
      return loginService(params)
      .then((data) => {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: data.user,
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
//action for signup
export const signUp = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'SIGNUP_REQUEST',
    });
    try {
      return signUpService(params)
      .then((data) => {
        dispatch({
          type: 'SIGNUP_SUCCESS',
          payload: data.user,
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