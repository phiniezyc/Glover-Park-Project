
const INITIAL_STATE = {
  tracks: [],
  isFetching: false,
  error: undefined,
};

function playlistTracksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_TRACKS_REQUEST':
      // May want to display loader in UI.
      return { ...state, isFetching: true }; // returns a new copy of state (immutable)
    case 'FETCH_TRACKS_SUCCESS':
      // Adding derived todos to state
      return { ...state, isFetching: false, tracks: action.payload };
      // tracks: [...state.tracks, ...action.tracks], = how to add to previous data
    case 'FETCH_TRACKS_FAILURE':
      // Providing error message to state, to display in UI.
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}


export default playlistTracksReducer;
