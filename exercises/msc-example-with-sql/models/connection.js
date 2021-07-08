const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'cep_lookup'
});

module.exports = connection;