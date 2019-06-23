
const INITIAL_STATE = {
  tracks: [],
  isFetching: false,
  error: undefined,
};

function playlistTracksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_TRACKS_REQUEST':
      // This time, you may want to display loader in the UI.
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'FETCH_TRACKS_SUCCESS':
      // Adding derived todos to state
      return Object.assign({}, state, {
        isFetching: false,
        tracks: action.payload,
        // tracks: [...state.tracks, ...action.tracks], = how to add to previous data
      });
    case 'FETCH_TRACKS_FAILURE':
      // Providing error message to state, to be able display it in UI.
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    default:
      return state;
  }
}

export default playlistTracksReducer;
