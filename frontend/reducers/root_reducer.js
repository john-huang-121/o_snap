import { combineReducers } from 'redux';
import { sessionErrorsReducer } from './session_errors_reducer';
import { sessionReducer } from './session_reducer';
import { entitiesReducer } from './entities_reducer';
import { searchReducer } from "./search_reducer";
import { uiReducer } from "./ui_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  search: searchReducer,
  ui: uiReducer,
  errors: sessionErrorsReducer,
});

export default rootReducer;
