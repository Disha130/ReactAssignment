import { ApiHelper } from '../../api';
//service for get profile data
export const getProfile = async (params) => {
  const { username } = params;
  const token = localStorage.getItem('AuthToken')
  /// FIXME: move this  to some util;
  const url = `/profiles/${username}`;
  try {
    const { data } =  await ApiHelper({ url: url, authorizationToken: token });
    return data;
  } catch (e) {
    throw e;
  }
};





