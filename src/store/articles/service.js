import { ApiHelper } from '../../api';

const token = localStorage.getItem('AuthToken')
//for get user feeds
export const getUserFeeds = async (params) => {
  const { limit, offset } = params;
  /// FIXME: move this  to some util;
  const url = `/articles/feed?limit=${limit}&offset=${offset}`;
  try {

    const { data } = await ApiHelper({ url: url, authorizationToken: token });
    return data;
  } catch (e) {
    throw e;
  }
};
//for get tag list
export const getTagLists = async (params) => {
  /// FIXME: move this  to some util;
  const url = `/tags`;
  try {

    const { data } = await ApiHelper({ url: url, authorizationToken: token });
    return data;
  } catch (e) {
    throw e;
  }
};

//get global feeds
export const getGlobalFeeds = async (params) => {
  const { limit, offset } = params;
  /// FIXME: move this  to some util;
  const url = `/articles?limit=${limit}&offset=${offset}`;
  try {

    const { data } = await ApiHelper({ url: url });
    return data;
  } catch (e) {
    throw e;
  }
};
//get Favourite Articles 
export const getFavouriteArticles = async (params) => {
  /// FIXME: move this  to some util
  const { favorited, limit, offset } = params;
  const url = `/articles?favorited=${favorited}&limit=${limit}&offset=${offset}`;
  try {

    const { data } = await ApiHelper({ url: url, authorizationToken: token });
    return data;
  } catch (e) {
    throw e;
  }
};
//get my articles
export const getMyArticles = async (params) => {
  /// FIXME: move this  to some util
  const { author, limit, offset } = params;
  const url = `/articles?author=${author}&limit=${limit}&offset=${offset}`;
  try {

    const { data } = await ApiHelper({ url: url, authorizationToken: token });
    return data;
  } catch (e) {
    throw e;
  }
};
//get articles basis on slug
export const getSlugArticles = async (params) => {
  /// FIXME: move this  to some util
  const { slug } = params;
  const url = `/articles/${slug}`;
  try {

    const { data } = await ApiHelper({ url: url, authorizationToken: token });
    return data;
  } catch (e) {
    throw e;
  }
};
//get check favourite article
export const getClickFavouriteArticles = async (params) => {
  /// FIXME: move this  to some util
  const { slug } = params;
  const url = `/articles/${slug}/favorite`;
  const method = 'post';
  try {
    const { data } = await ApiHelper({ method: method, url: url, authorizationToken: token });
    return data;
  } catch (e) {
    throw e;
  }
};
//post new article
export const postNewArticle = async (params) => {
  const { article } = params;
  /// FIXME: move this  to some util
  const url = `/articles`;
  try {
    const { data } = await ApiHelper({ method: 'POST', url: url, authorizationToken: token, params: article });
    return data;
  } catch (e) {
    throw e;
  }
};
// delete article
export const deleteArticle = async (params) => {
  /// FIXME: move this  to some util
  const { slug } = params;
  const url = `/articles/${slug}`;
  const method = 'delete';
  try {
    const { data } = await ApiHelper({ method: method, url: url, authorizationToken: token });
    return data;
  } catch (e) {
    throw e;
  }
};
// update article
export const updateArticle = async (params) => {
  /// FIXME: move this  to some util
  const { article } = params;
  const { slug } = params;
  const url = `/articles/${slug}`;
  try {
    const { data } = await ApiHelper({ method: 'PUT', url: url, authorizationToken: token ,params: article });
    return data;
  } catch (e) {
    throw e;
  }
};