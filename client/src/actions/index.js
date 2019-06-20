/* eslint-disable camelcase */
// eslint-disable-next-line import/prefer-default-export
export function fetchPlaylistTracks() {
  const access_token = sessionStorage.spotifyToken;

  // TODO: GET SELECTED SONG
  const playlist_id = null;

  // Instead of plain objects, we are returning function.
  return function (dispatch) {
    dispatch({
      type: 'FETCH_TRACKS_REQUEST',
    });


    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    };
    return fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, options)
    // Here, we are getting json body(in our case it will contain `tracks` or `error` prop, depending on request was failed or not) from server response
    // And providing `response` and `body` variables to the next chain.
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
        // If request was failed, dispatching FAILURE action.
          dispatch({
            type: 'FETCH_TRACKS_FAILURE',
            error: body.error,
          });
        } else {
        // When everything is ok, dispatching SUCCESS action.
          dispatch({
            type: 'FETCH_TRACKS_SUCCESS',
            payload: body.tracks, // named tracks in tutorial but custom names "payload"
          });
        }
      });
  };
}
