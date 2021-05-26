const connection = require('./connection');

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
  if (!email.match(regex)) return {
    error: true,
    message: 'O campo "password" deve ter pelo menos 6 caracteres'
  }
  return null;
}

const create = ({ firstName, lastName, email, password }) => {
  return connection().then((db) => 
    db.collection('user').insertOne({ firstName, lastName, email, password })
    .then((result) => { id: result.insertedId, firstName, lastName, email, password })
  );
}

module.exports = {
  isValid,
  create,
}