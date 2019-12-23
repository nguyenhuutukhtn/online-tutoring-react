import { combineReducers } from 'redux';

import users from './user.reducer';
import alert from './alert.reducer';
import registration from './registration.reducer';
import login from './login.reducer';
import chat from './chat.reducer';

const rootReducer = combineReducers({
  users,
  alert,
  registration,
  login,
  chat
});

export default rootReducer;
