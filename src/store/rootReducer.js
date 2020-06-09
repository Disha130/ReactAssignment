import { combineReducers } from 'redux';
import Articles from './articles/reducer';
import AuthReducer from './auth/reducer';
import ProfileData from './profile/reducer';
import CommentData from './comment/reducer';
import FollowData from './Follow/reducer';



const createRootReducer = () => combineReducers({
  Articles,
  AuthReducer,
  ProfileData,
  CommentData,
  FollowData
});


export default createRootReducer;
