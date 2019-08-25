import { FETCH_TRACKS, DELETE_TRACKS } from '../constants';


const { FETCH_TRACKS_REQUEST, FETCH_TRACKS_SUCCESS, FETCH_TRACKS_FAILURE } = FETCH_TRACKS;
const { DELETE_TRACKS_REQUEST, DELETE_TRACKS_SUCCESS, DELETE_TRACKS_FAILURE } = DELETE_TRACKS;

const INITIAL_STATE = {
  tracks: [],
  isFetching: false,
  isDeleting: false,
  tracksToDelete: [],
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

    // DELETE TRACKS
    case DELETE_TRACKS_REQUEST:
      return { ...state, isDeleting: true };
    case DELETE_TRACKS_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        tracks: state.items.filter((track) => {
          if (state.tracksToDelete.includes(track.uri)) {
            return false;
          }
          return true;
        }),
      };
    case DELETE_TRACKS_FAILURE:
      return { ...state, isDeleting: false, error: action.error };
    default:
      return state;
  }
}


export default playlistTracksReducer;
