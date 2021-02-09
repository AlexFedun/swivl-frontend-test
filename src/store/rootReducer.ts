import { combineReducers } from 'redux';
import UserReducer from './user/user.reducer';

const appReducer = combineReducers({
  user: UserReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
