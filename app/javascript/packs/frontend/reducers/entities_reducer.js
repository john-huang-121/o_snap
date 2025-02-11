import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { picturesReducer } from './pictures_reducer';
import { followsReducer } from "./follows_reducer";
import { likesReducer } from "./likes_reducer";
import { commentsReducer } from "./comments_reducer";

export const entitiesReducer = combineReducers({
  users: usersReducer,
  pictures: picturesReducer,
  followers: followsReducer,
  likes: likesReducer,
  comments: commentsReducer,
});