import { FETCH_TRACKS } from '../constants';

const { FETCH_TRACKS_REQUEST, FETCH_TRACKS_SUCCESS, FETCH_TRACKS_FAILURE } = FETCH_TRACKS;
/* eslint-disable camelcase */
// eslint-disable-next-line import/prefer-default-export
export function fetchPlaylistTracks(playlistId) { // TODO: Abstract out to own file
  const access_token = sessionStorage.spotifyToken;
  // eslint-disable-next-line func-names
  return (dispatch) => { // Instead of plain objects, we are returning function by redux design.
    dispatch({
      type: FETCH_TRACKS_REQUEST,
    });

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    };
    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, options)
    // Getting json body(will contain `tracks` or `error` prop,
    // depending on request was failed or not) from server response
    // And providing `response` and `body` variables to the next chain.
      .then(response => response.json()
        .then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) { // If request failed, dispatch FAILURE action.
          dispatch({
            type: FETCH_TRACKS_FAILURE,
            error: body.error,
          });
        } else {
          dispatch({
            type: FETCH_TRACKS_SUCCESS,
            payload: body.items,
          });
        }
      })
      .catch(error => console.log('fetch error, oh no!', error.message));
  };
}
