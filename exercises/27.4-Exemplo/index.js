const bodyParser = require('body-parser');
const express = require('express');
const MoviesController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());

app.post('/movies', MoviesController.create);

app.listen('3000', () => console.log('App Online on Port 3000'));