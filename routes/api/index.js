const router = require('express').Router();

const spotifyPlaylistRoutes = require('./spotifyPlaylist');
const spotifyAuthRoutes = require('./spotifyAuth');

// Clean this structure up.  Have 1 file for spotify routes imported here
router.use('/spotify', spotifyPlaylistRoutes, spotifyAuthRoutes);

module.exports = router;
