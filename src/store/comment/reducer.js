//Reducer for all comment actions(get,delete,post)
const CommentData = (state = {comment: {},deletecomment : {},postcomment : {},loading: false}, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'GET_COMMENT_REQUEST':
        return {
          ...state,
          loading: true,
        };
  
      case 'GET_COMMENT_SUCCESS':
        return {
          ...state,
          comment: payload,
          loading: false,
        };

        case 'DELETE_COMMENT_REQUEST':
        return {
          ...state,
          loading: true,
        };
  
      case 'DELETE_COMMENT_SUCCESS':
        return {
          ...state,
          deletecomment: payload,
          loading: false,
        };

        case 'POST_COMMENT_REQUEST':
        return {
          ...state,
          loading: true,
        };
  
      case 'POST_COMMENT_SUCCESS':
        return {
          ...state,
          postcomment: payload,
          loading: false,
        };

      default:
        return state;
    }
  };
  
  export default CommentData;
  