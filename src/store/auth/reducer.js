//Reducer for login & sign up
const AuthReducer = (state = { loggedInUser: {}, registeredUser: {},
  loading: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loggedInUser: payload,
        loading: false,
      };
    case 'SIGNUP_REQUEST':
      return {
        ...state,
        loading: true,
      };
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          registeredUser: payload,
          loading: false,
        };
    default:
      return state;
  }
};

export default AuthReducer;
