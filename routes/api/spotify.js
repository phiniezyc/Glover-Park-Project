const router = require('express').Router();


// router.route('/').get(spotifyPlaylist); //spotifyPlaylist hasn't been created yet


router.route('/')
  .get((req, res) => {
    res.send("spotify!!");
  });


module.exports = router;
