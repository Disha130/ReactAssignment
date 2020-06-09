import { ApiHelper } from '../../api';
//for get follow data 
export const getFollow = async (params) => {
  const { username } = params;
  const token = localStorage.getItem('AuthToken')
  const url = `/profiles/${username}/follow`;
  try {
    const { data } =  await ApiHelper({  method : 'POST',url: url, authorizationToken: token });
    return data;
  } catch (e) {
    throw e;
  }
};





