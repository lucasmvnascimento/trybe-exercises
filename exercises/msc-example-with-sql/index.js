const express = require('express');
const bodyParser = require('body-parser');

const Cep = require('./controllers/Cep');
const middlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({message: 'pong!'});
});

app.get('/cep/:cep', Cep.findByCep);

app.post('/cep', Cep.createCep);

app.use(middlewares.error);

app.listen('3000', () => console.log('App Online on Port 3000'));