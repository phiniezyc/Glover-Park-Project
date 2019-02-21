const router = require('express').Router();

const spotifyPlaylistRoutes = require('./spotifyPlaylist');
const spotifyAuthRoutes = require('./spotifyAuth');


router.use('/spotify', spotifyPlaylistRoutes, spotifyAuthRoutes);

module.exports = router;
