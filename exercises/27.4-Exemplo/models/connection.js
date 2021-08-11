const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = async () => (
  db ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then((conn) => {
      db = conn.db('model_example');
      return db;
    }).catch((err) => {
      console.error(err);
      process.exit(1);
    })
);

module.exports = connection;