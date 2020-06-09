//Reducer for all articles api

const Articles = (state = {
  userArticles: [], tagList: [], globalArticles: [], favouriteArticles: [], myArticles: [],
  slugArticles: [], getClickFavouriteArticles: [], newPostArticle: [], delteArticle: [], updateArticle : [],
  loading: false
}, action) => {
  const { type, payload } = action;
  switch (type) {
    //get user feed
    case 'GET_USER_FEED_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'GET_USER_FEED_SUCCESS':
      return {
        ...state,
        userArticles: payload,
        loading: false,
      };
      //get user tag
    case 'GET_USER_TAG_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'GET_USER_TAG_SUCCESS':
      return {
        ...state,
        tagList: payload,
        loading: false,
      };
      //get global feed
    case 'GET_GLOBAL_FEED_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'GET_GLOBAL_FEED_SUCCESS':
      return {
        ...state,
        globalArticles: payload,
        loading: false,
      };
      //get favourite feed
    case 'GET_FAVOURITE_FEED_REQUEST':
      return {
        ...state,
        loading: true,
      };
      
    case 'GET_FAVOURITE_FEED_SUCCESS':
      return {
        ...state,
        favouriteArticles: payload,
        loading: false,
      };
      //get my articles
    case 'GET_MY_ARTICLE_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'GET_MY_ARTICLE_SUCCESS':
      return {
        ...state,
        myArticles: payload,
        loading: false,
      };
      //get articles basis on slug
    case 'GET_SLUG_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'GET_SLUG_SUCCESS':
      return {
        ...state,
        slugArticles: payload,
        loading: false,
      };
      //get favourite check 
    case 'GET_CLICK_FAVOURITE_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'GET_CLICK_FAVOURITE_SUCCESS':
      return {
        ...state,
        getClickFavouriteArticles: payload,
        loading: false,
      };
      //post new article
    case 'POST_ARTICLE_NEW_POST_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'POST_ARTICLE_NEW_POST_SUCCESS':
      return {
        ...state,
        newPostArticle: payload,
        loading: false,
      };
      //delete article
    case 'DELETE_ARTICLE_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'DELETE_ARTICLE_SUCCESS':
      return {
        ...state,
        delteArticle: payload,
        loading: false,
      };
      //update article
      case 'UPDATE_ARTICLE_REQUEST':
        return {
          ...state,
          loading: true,
        };
  
      case 'UPDATE_ARTICLE_SUCCESS':
        return {
          ...state,
          updateArticle: payload,
          loading: false,
        };



    default:
      return state;
  }
};

export default Articles;
