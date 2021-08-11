const Cep = require('../models/Cep');

const CEP_REGEX = /\d{5}-\d{3}/;

const findByCep = async (cep) => {
  const cepInfo = await Cep.findByCep(cep);
  if (!Cep.formatCep(cep).match(CEP_REGEX)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    };
  };
  if (!cepInfo) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado'
      }
    };
  };
  return cepInfo;
};

const createCep = async ({cep, logradouro, bairro, localidade, uf}) => {
  const alreadyExists = await Cep.findByCep(cep);
  if (!cep.match(CEP_REGEX)) return {
    error: {
      code: 'invalidData',
      message: 'CEP inválido'
    }
  };
  if (alreadyExists) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      }
    };
  };
  return Cep.createCep({cep, logradouro, bairro, localidade, uf});
};

module.exports = {
  findByCep,
  createCep,
};