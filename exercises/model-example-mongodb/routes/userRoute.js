const express = require('express');
const bodyParser = require('body-parser');
const user = require('../models/User');

const router = express.Router();

router.use(bodyParser.json());

router.get('/user', async (_req, res) => {
  const users = await user.getAllUsers();
  res.status(200).json(users);
});

router.post('/user', async (req, res) => {
  const newUser = req.body;
  const validation = user.isValid(newUser);
  if (validation) res.status(500).json({ message: validation.message });
  const result = await user.createNewUser(newUser);
  res.status(201).json(result);
});

router.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const userById = await user.getUserById(id);
  if (!userById) res.status(404).json({error: true, message: 'Usuário não encontrado'});
  res.status(200).json(userById);
});

router.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const newUserInfo = req.body;
  console.log(newUserInfo);
  const validation = user.isValid(newUserInfo);
  if (validation) res.status(500).json({ message: validation.message });
  const userById = await user.getUserById(id);
  if (!userById) res.status(404).json({error: true, message: 'Usuário não encontrado'});
  const result = await user.editUser(id, newUserInfo);
  res.status(200).json(result);
});

module.exports = router;

