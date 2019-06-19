import React from 'react';

import { connect } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/index';
import spotifyLoggedIn from './pages/spotifyLoggedIn';

import './App.css';

import setPlaylistTracks from '../src/actions';
import { getPlaylistTracks } from './reducers/index';

const mapStateToProps = state => ({ // state is undefined/empty right now
  // playlistTracks: state.getPlaylistTracks.playlistTracks,



});

const mapDispatchToProps = dispatch => ({
  getPlaylistTracks: () => dispatch(setPlaylistTracks(getPlaylistTracks)),
});

const App = () => (
  <div className="App">
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/spotifyLoggedIn" component={spotifyLoggedIn} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);


export default connect(mapStateToProps, mapDispatchToProps)(App);
