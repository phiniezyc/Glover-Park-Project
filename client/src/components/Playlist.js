import React from 'react';

const Playlists = (props) => {
    //FIXME: Need to remove this styling.  Only for quick dev;
    const playlistDiv = {
        color: 'blue',
        minHeight: 300,
        minWidth: 300,
        display: 'flex',
        border: '2px solid green',
        margin: 10,
        flex: 1,
        };

    const imgStyle = {
        width:200,
        height:200
    }
    const playlists = props.playlists ? props.playlists.map(playlist =>{
         return (
             <div style={playlistDiv}>
                <h4  key={playlist.id}>Playlist: </h4>
                {playlist.name}
                <h4>Owner:</h4>
                {playlist.owner.display_name}
                <br></br>
                <img style={imgStyle} src={playlist.images[0].url} />
            </div>
            )
         }) : "Loading...";

    const divStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
    return (
        <div style={divStyle}>
        {playlists}
        </div>
    )
}

export default Playlists;
