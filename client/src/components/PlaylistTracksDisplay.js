import React from 'react';

// eslint-disable-next-line arrow-body-style
const PlaylistTracksDisplay = (props) => {
  return (
    <React.Fragment>
      <div>{props.children}</div>
    </React.Fragment>
  );
};

export default PlaylistTracksDisplay;
