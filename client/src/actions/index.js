/* eslint-disable camelcase */
// eslint-disable-next-line import/prefer-default-export
export function fetchPlaylistTracks(playlistId) {
  const access_token = sessionStorage.spotifyToken;
  const playlist_id = playlistId;
  // eslint-disable-next-line func-names
  return (dispatch) => { // Instead of plain objects, we are returning function.
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
      .then(response => response.json()
        .then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) { // If request failed, dispatch FAILURE action.
          dispatch({
            type: 'FETCH_TRACKS_FAILURE',
            error: body.error,
          });
        } else {
          dispatch({
            type: 'FETCH_TRACKS_SUCCESS',
            payload: body.items,
          });
        }
      })
      .catch(error => console.log('fetch error, oh no!', error.message));
  };
}
