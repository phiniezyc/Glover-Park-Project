
import {
  FETCH_TRACKS,
  DELETE_TRACKS,
} from '../constants';

import playlistTracksReducer from './playlistsReducer';

describe('fetch tracks', () => {
  it('should return initial state', () => {
    expect(playlistTracksReducer(undefined, {})).toEqual({
      tracks: [],
      isFetching: false,
      isDeleting: false,
      tracksToDelete: [],
      tracksToDeleteIDs: [],
      error: undefined,
    });
  });
});
