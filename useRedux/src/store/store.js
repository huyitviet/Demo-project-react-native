import {combineReducers, createStore} from 'redux';
import {mainReducer} from './reducers';

export const store = createStore(combineReducers({
  countModel: mainReducer,
}));
