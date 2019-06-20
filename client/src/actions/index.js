/* eslint-disable camelcase */
import { SET_PLAYLIST_TRACKS } from '../constants/constants';

const fetchPlaylistTracks = (playlistId) => {
  // eslint-disable-next-line camelcase
  const access_token = sessionStorage.spotifyToken;
  // eslint-disable-next-line camelcase
  const playlist_id = playlistId; // FIXME: not using state here because redux
  // 1QHyEjxmzvSq58Sk6V3KHa/tracks?offset=0&limit=100
  // playlistIDs
  // 0GcXw8ktGzhh1Wrh0gFotJ
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
  };

  const request = fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, options)
    .then(response => response.json())
    .catch(error => console.log(error.message));


  return {
    type: SET_PLAYLIST_TRACKS,
    payload: request,
  };
};


export default { fetchPlaylistTracks };
