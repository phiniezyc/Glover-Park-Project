// app.use(routing)
// mongodb or SQL
// Use spotify API to pull in created playlist

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('works');
});

app.listen(PORT, () => {
	console.log(`🌎 ==> Server now on port ${PORT}!`);
});
