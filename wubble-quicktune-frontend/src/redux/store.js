import {thunk} from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from 'redux';
import musicReducer from './reducers/musicreducer';

const rootReducer = combineReducers({
  music: musicReducer,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

export default store;
