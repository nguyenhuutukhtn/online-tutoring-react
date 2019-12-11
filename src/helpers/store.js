import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

const middleware = [thunkMiddleware, loggerMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
