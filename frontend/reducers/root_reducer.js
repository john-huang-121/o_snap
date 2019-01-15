import { combineReducers } from 'redux';
import { sessionErrorsReducer } from './session_errors_reducer';
import { sessionReducer } from './session_reducer';
import { entitiesReducer } from './entities_reducer';
import { followsReducer } from "./follows_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: sessionErrorsReducer,
  session: sessionReducer,
  follows: followsReducer,
});

export default rootReducer;
