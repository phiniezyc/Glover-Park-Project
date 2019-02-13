// initial server.js file
// Use Express for routing
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
