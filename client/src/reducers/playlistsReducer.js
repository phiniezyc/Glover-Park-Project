import { FETCH_TRACKS } from '../constants';

const { FETCH_TRACKS_REQUEST, FETCH_TRACKS_SUCCESS, FETCH_TRACKS_FAILURE } = FETCH_TRACKS;

const INITIAL_STATE = {
  tracks: [],
  isFetching: false,
  error: undefined,
};

function playlistTracksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TRACKS_REQUEST:
      // May want to display loader in UI.
      return { ...state, isFetching: true }; // returns a new copy of state (immutable)
    case FETCH_TRACKS_SUCCESS:
      // Add derived todos to state
      return { ...state, isFetching: false, tracks: action.payload };
      // tracks: [...state.tracks, ...action.tracks], = how to add to previous data
    case FETCH_TRACKS_FAILURE:
      // Provide error message to state for UI display.
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}


export default playlistTracksReducer;
