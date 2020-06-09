import { getComment,deleteComment,postComment} from './service';
//Action for all comment apis (get,delete,post)
export const getCommentData = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_COMMENT_REQUEST',
    });
    try {
      return getComment(params)
      .then((data) => {
        dispatch({
          type: 'GET_COMMENT_SUCCESS',
          payload: data.comments,
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

export const getDeleteData = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'DELETE_COMMENT_REQUEST',
    });
    try {
      return deleteComment(params)
      .then((data) => {
        dispatch({
          type: 'DELETE_COMMENT_SUCCESS',
          payload: data.deleteComment,
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



export const postCommentData = (params) => {
  return (dispatch) => {
    dispatch({
      type: 'POST_COMMENT_REQUEST',
    });
    try {
      return postComment(params)
      .then((data) => {
        dispatch({
          type: 'POST_COMMENT_SUCCESS',
          payload: data.postComment,
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






