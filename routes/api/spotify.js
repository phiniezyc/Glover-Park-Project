const router = require('express').Router();

router.route('/').get(spotifyPlaylist); //spotifyPlaylist hasn't been created yet

module.exports = router;
