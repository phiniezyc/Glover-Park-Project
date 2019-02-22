// use implicit OAuth2 strategy to get auth from single page react app

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const routes = require('./routes');

app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
