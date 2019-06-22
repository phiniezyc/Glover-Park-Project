
import { combineReducers } from 'redux';

import PlayListTracksReducer from './playlistsReducer';

const rootReducer = combineReducers({
  playlistTracks: PlayListTracksReducer,
});

export default rootReducer;

