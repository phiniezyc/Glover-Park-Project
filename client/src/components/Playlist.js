import React from 'react';

const Playlists = (props) => {
    //FIXME: Need to remove this styling.  Only for quick dev;
    const divStyle = {
        color: 'blue',
        minHeight: 200,
        minWidth: 200,
        display: 'block',
        border: '2px solid green',
        margin: 10,
        };
    const playlists = props.playlists ? props.playlists.map(playlist =>{
         return (
             <div style={divStyle}>
                <h4  key={playlist.id}>Playlist: </h4>
                {playlist.name}
                <h4>Owner:</h4>
                {playlist.owner.display_name}
                <br></br>
                <img src={playlist.images[0].url}/>
            </div>
            )
         }) : "Loading...";


    return (
        <React.Fragment>
        {playlists}
        </React.Fragment>
    )
}

export default Playlists;
