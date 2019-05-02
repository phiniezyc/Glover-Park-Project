import React from 'react';

const Playlists = (props) => {
    {//FIXME: Need to remove this styling.  Only for quick dev}
    const divStyle = {
        color: 'blue',
        height: 200,
        width: 200,
        display: 'block',
        border: '2px solid green',
        margin: 10,
        };
    const playlists = props.playlists ? props.playlists.map(playlist =>{
         return <h4 style={divStyle} key={playlist.id}>{playlist.name}</h4>
         }) : "Loading...";


    return (
        <div >
            {playlists}
        </div>


    )
}

export default Playlists;

