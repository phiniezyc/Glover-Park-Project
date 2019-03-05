const express = require('express'); // Express web server framework
const request = require('request'); // "Request" library
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');

const { clientId, clientSecret, redirectUri } = require('../../secrets.js');


/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = function (length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = 'spotify_auth_state';

const app = express();

app
  .use(express.static(`${__dirname}/public`))
  .use(cors())
  .use(cookieParser());

app.get('/login', (req, res) => {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  const scope = 'user-read-private user-read-email';
  res.redirect(`https://accounts.spotify.com/authorize?${querystring.stringify({
    response_type: 'code', clientId, scope, redirectUri, state,
  })}`);
});

app.get('/callback', (req, res) => {
  // your application requests refresh and access tokens after checking the state
  // parameter
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies
    ? req.cookies[stateKey]
    : null;

  if (state === null || state !== storedState) {
    res.redirect(`/#${querystring.stringify({ error: 'state_mismatch' })}`);
  } else {
    res.clearCookie(stateKey);
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code,
        redirectUri,
        grant_type: 'authorization_code',
      },
      headers: {
        Authorization: `Basic ${new Buffer(`${ clientId }:${ clientSecret }`).toString('base64')}`,
      },
      json: true,
    };

    request.post(authOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        let access_token = body.access_token,
          refresh_token = body.refresh_token;

        const options = {
          url: 'https://api.spotify.com/v1/me',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          json: true,
        };

        // use the access token to access the Spotify Web API
        request.get(options, (error, response, body) => {
          console.log(body); // this is how we get the response on server side
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect(`/#${querystring.stringify({ access_token, refresh_token })}`); // How we redirect to new page once hit spotify API, access tokens are pass in query string on client--don't use both methods!
      } else {
        res.redirect(`/#${querystring.stringify({ error: 'invalid_token' })}`);
      }
    });
  }
});

app.get('/refresh_token', (req, res) => {
  // requesting access token from refresh token
  const { refreshToken } = req.query;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization: `Basic ${new Buffer(`${ clientId }:${ clientSecret }`).toString('base64')}`,
    },
    form: {
      grant_type: 'refresh_token',
      refreshToken,
    },
    json: true,
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const { accessToken } = body;
      res.send({ accessToken });
    }
  });
});


module.exports = app;
