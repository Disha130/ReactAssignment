import { ApiHelper } from '../../api';
//for login api
const token = localStorage.getItem('AuthToken')
export const loginService = async (params) => {
  /// FIXME: move this  to some util
  const url = `/users/login`;
  try {
    const { data } =  await ApiHelper({ method : 'POST', url: url, params });
    return data;
  } catch (e) {
    throw e;
  }
};
//for sign up api
export const signUpService = async (params) => {
  const url = `/users`;
  try {
    const { data } =  await ApiHelper({ method : 'POST', url: url, params });
    return data;
  } catch (e) {
    throw e;
  }
};
