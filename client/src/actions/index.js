/* eslint-disable camelcase */
import { SET_PLAYLIST_TRACKS } from '../constants/constants';

const getPlaylistTracks = (props) => {
  // eslint-disable-next-line camelcase
  const access_token = sessionStorage.spotifyToken;
  // eslint-disable-next-line camelcase
  const playlist_id = this.state.selectedPlaylistId; // FIXME: not using state here because redux

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
  };

  fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, options)
    .then(response => response.json())
    .then(playlistTracks =>
      this.setState({
        playlistTracks,
      }))
    .catch(error => console.log(error.message));
};

const setPlaylistTracks = tracks => ({
  type: SET_PLAYLIST_TRACKS,
  payload: tracks,
});

export default { setPlaylistTracks };
