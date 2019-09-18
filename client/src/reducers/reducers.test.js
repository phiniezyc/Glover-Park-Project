
import {
  FETCH_TRACKS,
  DELETE_TRACKS,
} from '../constants';

import rootReducer from './index';

describe('spotifyTracks', () => {
  it('should return initial state', () => {
    expect(rootReducer.playlistTracks.PlaylistTracksReducer(undefined, {})).toEqual({ tracks: [] });
  });
});
