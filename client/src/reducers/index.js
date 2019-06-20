
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';
import PlayListTracksReducer from './playlistsReducer';

const rootReducer = combineReducers({
  tracks: PlayListTracksReducer,
});

export default rootReducer;

