import {
  getUserFeeds, getTagLists, getGlobalFeeds, getFavouriteArticles, getMyArticles, getSlugArticles,
  getClickFavouriteArticles, postNewArticle, deleteArticle,updateArticle
} from './service';
//call for get user fee
export const getUserFeed = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_USER_FEED_REQUEST',
    });
    try {
      return getUserFeeds(params)
        .then((data) => {
          dispatch({
            type: 'GET_USER_FEED_SUCCESS',
            payload: data.articles,
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
//call for get tag list
export const getTagList = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_USER_TAG_REQUEST',
    });
    try {
      return getTagLists(params)
        .then((data) => {
          dispatch({
            type: 'GET_USER_TAG_SUCCESS',
            payload: data.tags,
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
//call for get gloabl feed
export const getGlobalFeed = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_GLOBAL_FEED_REQUEST',
    });
    try {
      return getGlobalFeeds(params)
        .then((data) => {
          dispatch({
            type: 'GET_GLOBAL_FEED_SUCCESS',
            payload: data.articles,
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
//call for get favourite articles
export const getFavouriteArticle = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_FAVOURITE_FEED_REQUEST',
    });
    try {
      return getFavouriteArticles(params)
        .then((data) => {
          dispatch({
            type: 'GET_FAVOURITE_FEED_SUCCESS',
            payload: data.articles,
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
//call for get my articles
export const getMyArticle = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_MY_ARTICLE_REQUEST',
    });
    try {
      return getMyArticles(params)
        .then((data) => {
          dispatch({
            type: 'GET_MY_ARTICLE_SUCCESS',
            payload: data.articles,
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
//call for get articles basis on slug
export const getSlugArticle = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_SLUG_REQUEST',
    });
    try {
      return getSlugArticles(params)
        .then((data) => {
          dispatch({
            type: 'GET_SLUG_SUCCESS',
            payload: data.article,
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
//call for get click for check favourite article
export const getClickFavouriteArticle = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_CLICK_FAVOURITE_REQUEST',
    });
    try {
      return getClickFavouriteArticles(params)
        .then((data) => {
          dispatch({
            type: 'GET_CLICK_FAVOURITE_SUCCESS',
            payload: data.article,
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
//call for post new article
export const postNewArticleData = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'POST_ARTICLE_NEW_POST_REQUEST',
    });
    try {
      return postNewArticle(params)
        .then((data) => {
          dispatch({
            type: 'POST_ARTICLE_NEW_POST_SUCCESS',
            payload: data.article,
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
//call for delete article
export const deleteArticleData = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'DELETE_ARTICLE_REQUEST',
    });
    try {
      return deleteArticle(params)
        .then((data) => {
          dispatch({
            type: 'DELETE_ARTICLE_SUCCESS',
            payload: data,
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
//call for update article
export const updateArticleData = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_ARTICLE_REQUEST',
    });
    try {
      return updateArticle(params)
        .then((data) => {
          dispatch({
            type: 'UPDATE_ARTICLE_SUCCESS',
            payload: data.article,
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

