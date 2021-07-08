const MovieModel = require('../models/movieModel');

const findById = async (id) => {
  const result = await MovieModel.findById(id);
  if(!result) return null;
  const { id:_id, title, directedBy, releaseYear} = result;
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