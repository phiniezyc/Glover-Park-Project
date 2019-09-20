
// import {
//   FETCH_TRACKS,
//   DELETE_TRACKS,
// } from '../constants';

import playlistTracksReducer from './playlistsReducer';

describe('fetch tracks', () => {
  const INITIAL_STATE = {
    tracks: [],
    isFetching: false,
    isDeleting: false,
    tracksToDelete: [],
    tracksToDeleteIDs: [],
    error: undefined,
  };
  it('should return initial state', () => {
    expect(playlistTracksReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});
