const express = require('express');
const author = require('./models/author');

const app = express();

app.get('/', async (req, res) => {
  const authors = await author.getAll();
  res.status(200).json(authors);
});

app.listen('3000', () => console.log('Online on Port 3000'));