const connection = require('./connection');
const { ObjectId } = require('mongodb');

const findById = async (id) => {
  const db = await connection();
  const result = await db.collection('movies').findOne({_id: ObjectId(id)});
  if (!result) return null;
  const {title, directedBy, releaseYear} = result;
  return {
    id,
    title,
    directedBy,
    releaseYear
  };
};

module.exports = {
  findById,
};