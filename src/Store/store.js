import { createStore, combineReducers } from 'redux';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
  comment: commentReducer,
});

const store = createStore(rootReducer);

export default store;
