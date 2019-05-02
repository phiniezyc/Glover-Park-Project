import React from 'react';

const Playlists = (props) => {


    const playlists = props.playlists ? props.playlists.map(playlist =>{
         return <h4 key={playlist.id}>{playlist.name}</h4>
         }) : "Loading...";
    return (
        <div>
            {playlists}
        </div>


    )
}

export default Playlists;

