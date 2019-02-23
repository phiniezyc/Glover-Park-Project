const router = require('express').Router();

router
  .route('/auth') // can set this route up to take on other routes w/o having to type the route again
  .get((req, res) => {
    res.send('spotify auth route');
  });

// router.route('/signin', (req, res) => {
//   const google_url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.CLIENT_ID}&redirect_uri=http://localhost:${PORT}/oauth/callback&scope=https://www.googleapis.com/auth/calendar&access_type=offline&response_type=code`;
//   res.redirect(google_url);
// });

// router.route('/oauth/callback', (req, res) => {
//   const code = req.param('code');
//   axios({ url: `https://www.googleapis.com/oauth2/v4/token?code=${code}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&redirect_uri=http://localhost:${PORT}/oauth/callback&grant_type=authorization_code`, method: 'POST' }).then((response) => {
//     console.log('Response: ', response.data);
//     res.json({ msg: 'Ok' });
//   }).catch((err) => {
//     console.log('Error: ', err.response.data);
//     res.json({ error: 'Error' });
//   });
// });


module.exports = router;
