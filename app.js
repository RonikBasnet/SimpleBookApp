const express = require('express');
const port = 3000;
const books = require('./books');

const app = express();

app.use(express.json());
app.use('/app/roniklib', books);

app.listen(port, () => {
  console.log(`Server chaliraxa`);
});