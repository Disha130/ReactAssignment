//creducer for profile 
const ProfileData = (state = {profile: {},loading: false}, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'GET_PROFILE_REQUEST':
        return {
          ...state,
          loading: true,
        };
  
      case 'GET_PROFILE_SUCCESS':
        return {
          ...state,
          profile: payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default ProfileData;
  