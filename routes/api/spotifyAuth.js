const router = require('express').Router();


router.route('/auth').get((req, res) => {
  res.send('spotify auth route');
});

module.exports = router;
