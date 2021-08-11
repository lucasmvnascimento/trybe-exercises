const { MongoClient } = require('mongodb');

const MONGODB_URL = 'mongodb://127.0.0.1:27017'

let db = null;

const connection = () => (
  db ? Promise.resolve(db)
  : MongoClient.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((conn) => {
      db = conn.db('model_example');
      return db;
    })
);

module.exports = connection;

