const connection = require('./connection');
const { ObjectId } = require('mongodb');

const formatUser = (user) => {
  const userData = user.ops ? user.ops[0] : user;
  const { _id, ...data } = userData;
  return {
    id: _id,
    ...data
  }
};

const isValid = ({ firstName, lastName, email, password }) => {
  if (!firstName) return {
    error: true,
    message: 'O campo "firstName" deve ser obrigatório'
  }
  if (!lastName) return {
    error: true,
    message: 'O campo "lastName" deve ser obrigatório'
  }
  if (!email) return {
    error: true,
    message: 'O campo "email" deve ser obrigatório'
  }
  if (!password) return {
    error: true,
    message: 'O campo "password" deve ser obrigatório'
  }
  const regex = /[a-zA-Z0-9]{6,}/;
  if (!password.match(regex)) return {
    error: true,
    message: 'O campo "password" deve ter pelo menos 6 caracteres'
  }
  return null;
}

const createNewUser = (user) => {
  const { firstName, lastName, password, email } = user;
  return connection().then((db) => db
    .collection('users')
    .insertOne({firstName, lastName, password, email})
  ).then((result) => formatUser(result));
}

const getAllUsers = () => {
  return connection().then((db) => db.collection('users').find().toArray())
    .then((result) => result.map(formatUser));
}

const getUserById = (id) => {
  if (!ObjectId.isValid(id)) return null;
  return connection().then((db) => db.collection('users').findOne(new ObjectId(id))).then((result) => formatUser(result));
}

const editUser = async (id, userInfo) => {
  if (!ObjectId.isValid(id)) return null;
  // return connection()
  //   .then((db) => db.collection('users')
  //     .updateOne({_id: new ObjectId(id)}, {$set: userInfo}))
  //   .then((result) => {
  //     return {id, ...userInfo};
  //   });
  const db = await connection();
  const result = await db.collection('users').updateOne({_id: new ObjectId(id)}, {$set: userInfo});
  return { id, ...userInfo };
};

module.exports = {
  isValid,
  createNewUser,
  getAllUsers,
  getUserById,
  editUser,
}