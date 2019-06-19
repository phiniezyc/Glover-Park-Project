import { SET_PLAYLIST_TRACKS } from '../constants/constants';

const setPlaylistTracks = (tracks) => {
  return {
    type: SET_PLAYLIST_TRACKS,
    payload: tracks,
  };
};

export default { setPlaylistTracks };
