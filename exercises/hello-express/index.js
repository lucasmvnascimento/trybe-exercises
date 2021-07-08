const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello World');
});

app.get('/teste', [
  (_req, res, next) => {
    res.send('Testando, som!');
    next();
  },
  (req, _res) => {
    console.log('Tão me ouvindo?');
    console.log(req.headers);
  }
]);


app.use(bodyParser.json());

app.post('/hello', (req, _res) => {
  const { name } = req.body;
  res.status(200).json({ greetings: `Hello, ${name}` });
});


app.listen(3000, () => console.log('Aplicação ouvindo na porta 3000'));