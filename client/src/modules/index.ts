import { combineReducers } from 'redux';
import user from './user';
import counter from './counter';

const rootReducer = combineReducers({
  user,
  counter
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
