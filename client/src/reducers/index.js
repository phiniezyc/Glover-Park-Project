
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';
import PlayListTracksReducer from './playlistsReducer';

const rootReducer = combineReducers({
  posts: PlayListTracksReducer,
});

export default rootReducer;

