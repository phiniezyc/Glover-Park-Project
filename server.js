const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();
const PORT = process.env.PORT || 3000;

const routes = require('./routes');

app
  .use(express.static(`${__dirname}/public`))
  .use(cors())
  .use(cookieParser());

app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
