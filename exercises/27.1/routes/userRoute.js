const express = require('express');
const bodyParser = require('body-parser');
const user = require('../models/User');

const route = express.Router();

route.use(bodyParser.json());

route.post('/users', (req, res) => {
  const newUser = req.body;
  const validation = user.isValid(newUser);
  if (validation) res.status(500).json({ message: validation.message });
});

module.exports = route;