const Cep = require('../services/Cep');
const Joi = require('joi');
const rescue = require('express-rescue');

const CEP_REGEX = /\d{5}-\d{3}/;

const findByCep = async (req, res, _next) => {
  const { cep } = req.params;
  const cepResulted = await Cep.findByCep(cep);
  if (cepResulted.error) return res.status(400).json(cepResulted.error);
  return res.status(200).json(cepResulted);
};

const createCep = async (req, res, next) => {

  const requiredNonEmptyString = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate(req.body);

  if (error) return next(error);

  const newCep = await Cep.createCep(req.body);

  if(newCep.error) return next(newCep);

  res.status(201).json(newCep);
};

module.exports = {
  findByCep,
  createCep,
};