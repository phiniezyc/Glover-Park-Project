import React from 'react';

const Playlists = (props) => {
    //FIXME: Need to remove this styling.  Only for quick dev;
    const divStyle = {
        color: 'blue',
        height: 200,
        width: 200,
        display: 'block',
        border: '2px solid green',
        margin: 10,
        };
    const playlists = props.playlists ? props.playlists.map(playlist =>{
         return (
             <div style={divStyle}>
                <h4  key={playlist.id}>{playlist.name}</h4>
                <img src={playlist.images[0].url}/>
            </div>
            )
         }) : "Loading...";


    return (
        {playlists}
    )
}

export default Playlists;
