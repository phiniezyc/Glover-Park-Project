const router = require('express').Router();

// router.route('/').get(spotifyPlaylist); //spotifyPlaylist hasn't been created yet

router.route('/playlist').get((req, res) => {
  res.send('spotify playlist route!!');
});

module.exports = router;
