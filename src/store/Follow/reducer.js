//reducer for get follow data
const FollowData = (state = {follow: {},loading: false}, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'GET_FOLLOW_REQUEST':
        return {
          ...state,
          loading: true,
        };
  
      case 'GET_FOLLOW_SUCCESS':
        return {
          ...state,
          follow: payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default FollowData;
  