const fs = require('fs/promises');

function operacao (a, b, c) {
  return new Promise ((resolve, reject) => {
    if (typeof(a) !== "number" || typeof(b) !== "number" || typeof(c) !== "number") {
      reject('Informe apenas números');
    }
    const numero = (a + b) * c;
    if (numero < 50) reject('Valor muito baixo');
    resolve(numero);
  });
};



async function executa () {
  const array = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
  ];
  // operacao(...array).then((valor) => console.log(valor)).catch((err) => console.error(`Erro: ${err}`));
  try {
    const resultado = await operacao(...array);
    console.log(resultado);
  } catch (err) {
    console.log(err);
  };
};

// executa();

async function buscarPorId (id) {
  const simpsons = await fs.readFile('./simpsons.json', 'utf8')
    .then((result) => JSON.parse(result))
    .catch((err) => console.log(err.message));
  const filteredSimpson = simpsons.find((person) => parseInt(person.id) === id);
  if (!filteredSimpson) throw new Error ('Id não encontrado');
  return filteredSimpson;
};

// buscarPorId(3);

async function removeSimpsons() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf8')
    .then((result) => JSON.parse(result))
    .catch((err) => console.log(err.message));
  const filteredSimpons = simpsons.filter((simpson) => simpson.id !== '6' && simpson.id !== '10' );
  await fs.writeFile('./simpsons.json', JSON.stringify(filteredSimpons)).then(() => console.log("Removidos com sucesso"));
};

// removeSimpsons();

async function criaFamiliaSimpsons() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf8')
    .then((result) => JSON.parse(result))
    .catch((err) => console.log(err.message));
  const simpsonsFamily = simpsons.filter((simpson) => parseInt(simpson.id) <= 4);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily)).then(() => console.log("Criada com sucesso"));
};

criaFamiliaSimpsons();