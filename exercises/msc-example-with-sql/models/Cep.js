const connection = require('./connection');

const CEP_REGEX = /\d{5}-\d{3}/;

const formatCep = (cep) => {
  if (cep.match(CEP_REGEX)) return cep;
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const formatCepOutput = ({ cep, logradouro, bairro, localidade, uf }) => {
  return {
    cep: formatCep(cep),
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

const findByCep = async (cep) => {
  const filteredCep = cep.replace('-', '');
  const [cepInfo] = await connection
    .execute(`SELECT * FROM ceps WHERE cep=${filteredCep}`);
  console.log(cepInfo);
  return cepInfo[0];
};

const createCep = async ({cep, logradouro, bairro, localidade, uf}) => {
  const formatedCep = cep.replace('-', '');
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
  await connection.execute(query, [formatedCep, logradouro, bairro, localidade, uf]);
  return { cep: formatedCep, logradouro, bairro, localidade, uf };
};

module.exports = {
  formatCep,
  findByCep,
  createCep,
};