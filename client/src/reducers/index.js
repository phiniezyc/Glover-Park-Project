import { SET_PLAYLIST_TRACKS } from '../constants/constants';


const initialState = {
  playlistTracks: [],
};


// eslint-disable-next-line import/prefer-default-export
export const getPlaylistTracks = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PLAYLIST_TRACKS:
      return { ...state, playlistTracks: action.payload };

    default:
      return state;
  }
};

