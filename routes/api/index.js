const router = require('express').Router();

const spotifyRoutes = require('./spotify');

router.use('/spotify', spotifyRoutes);

module.exports = router;
