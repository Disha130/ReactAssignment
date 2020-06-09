import { ApiHelper } from '../../api';
//for get comment data
export const getComment = async (params) => {
  const { slug } = params;
  const token = localStorage.getItem('AuthToken')
  /// FIXME: move this  to some util;
  const url = `/articles/${slug}/comments`;
  try {
    const { data } =  await ApiHelper({ url: url, authorizationToken: token });
    return data;
  } catch (e) {
    throw e;
  }
};
//for delete comment data
export const deleteComment = async (params) => {
    const { slug } = params;
    const {id} = params;
    const token = localStorage.getItem('AuthToken')
    const url = `/articles/${slug}/comments/${id}`;
    try {
      const { data } =  await ApiHelper({ method : 'DELETE',url: url, authorizationToken: token});
      return data;
    } catch (e) {
      throw e;
    }
  };
//for post comment data
  export const postComment = async (params) => {
    const { slug } = params;
    const {comment} = params;
    const token = localStorage.getItem('AuthToken')
    const url = `/articles/${slug}/comments`;
    try {
      const { data } =  await ApiHelper({ method : 'POST',url: url, authorizationToken: token,params: comment});
      return data;
    } catch (e) {
      throw e;
    }
  };





