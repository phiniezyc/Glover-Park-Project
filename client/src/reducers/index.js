
import { combineReducers } from 'redux';

import PlayListTracksReducer from './playlistsReducer';

const rootReducer = combineReducers({
  tracks: PlayListTracksReducer,
});

export default rootReducer;

