import React from 'react';

const PlaylistTracksDisplay = (props) => {
  return (
    <React.Fragment>
      <div>{props.children}</div>
    </React.Fragment>
  );
};

export default PlaylistTracksDisplay;
