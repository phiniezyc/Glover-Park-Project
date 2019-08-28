import { DELETE_TRACKS } from '../constants';

const { DELETE_TRACKS_REQUEST, DELETE_TRACKS_SUCCESS, DELETE_TRACKS_FAILURE } = DELETE_TRACKS;
/* eslint-disable camelcase */
// eslint-disable-next-line import/prefer-default-export
export function deletePlaylistTracks(playlistsId, tracksToDelete) {
  const access_token = sessionStorage.spotifyToken;
  // eslint-disable-next-line func-names
  return (dispatch) => {
    dispatch({
      type: DELETE_TRACKS_REQUEST,
      payload: tracksToDelete,
    });

    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tracks: tracksToDelete.tracksToDelete,
      }),
    };
    return fetch(`https://api.spotify.com/v1/playlists/${playlistsId}/tracks`, options)
      .then(response => response.json()
        .then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: DELETE_TRACKS_FAILURE,
            error: body.error,
          });
        } else {
          dispatch({
            type: DELETE_TRACKS_SUCCESS,
          });
        }
      })
      .catch(error => console.log('delete error, oh no!', error.message));
  };
}

