const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs').promises;
const crypto = require('crypto');

const app = express();

app.use(bodyParser.json());

const authMiddleware = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || auth.length !== 16) res.status(401).json({
    message: "Token Inválido!",
  });
  next();
};

app.use(authMiddleware);

app.get('/ping', (req, res) => {
  res.json({
    message: 'pong',
  });
});

app.get('/hello', (req, res) => {
  const { name } = req.body;
  res.json({
    message: `Hello, ${name}`,
  });
});

app.post('/greetings', (req, res, next) => {
  const { name, age } = req.body;
  if (age > 17) res.status(200).json({
    message: `Hello, ${name}`,
  });
  res.status(401).json({
    message: 'Unauthorized',
  });
  next();
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.json({
    message: `Seu nome é ${name} e você tem ${age} anos de idade`,
  });
});

app.get('/simpsons', async (req, res) => {
  const simpsons = JSON.parse(await fs.readFile('./simpsons.json', 'utf-8'));
  res.json(simpsons);
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const simpsons = JSON.parse(await fs.readFile('./simpsons.json', 'utf-8'));
  const filteredSimpson = simpsons.filter((simpson) => simpson.id == id);
  if (filteredSimpson.length > 0) res.status(200).json(filteredSimpson);
  res.status(401).json({ message: 'simpson not found' });
});

app.post('/simpsons', async (req, res) => {
  const { name, id } = req.body;
  const simpsons = JSON.parse(await fs.readFile('./simpsons.json', 'utf-8'));
  if (simpsons.find((simpson) => simpson.id === id)) res.status(409).json({
    message: 'id already exists',
  });
  const newSimpsonsArray = simpsons.concat({ id, name });
  fs.writeFile('./simpsons.json', JSON.stringify(newSimpsonsArray));
  res.status(204).end()
});

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

app.post('/login', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone) res.status(401).json({
    message: 'missing fields',
  });
  res.status(200).json({
    token: generateToken(),
  });
});



app.listen(3000, () => console.log("App rodando na porta 3000"));