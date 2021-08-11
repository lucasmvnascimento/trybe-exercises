const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const db = await connection();
  const { insertedId: id } = db.collection('movies').insertOne({
    title,
    directedBy,
    releaseYear,
  });
  return {
    id
  };
};

const getAll = async () => {
  const db = await connection();
  const result = db.collection('movies').find().toArray();
  if (!result) return [];
  return result;
}

module.exports = {
  create,
  getAll,
};