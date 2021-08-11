const MovieService = require('../services/movieService');

const findById = async (req, res) => {
  if (!req.params) return res.status(404).send('Filme não encontrado');
  const { id } = req.params;
  const result = await MovieService.findById(id);
  if (!result) return res.status(404).send('Filme não encontrado');
  res.status(200).json(result);
};

module.exports = {
  findById,
};