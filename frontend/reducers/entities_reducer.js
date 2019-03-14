import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { picturesReducer } from './pictures_reducer';
import { followsReducer } from "./follows_reducer";

export const entitiesReducer = combineReducers({
  users: usersReducer,
  pictures: picturesReducer,
  followers: followsReducer,
});
