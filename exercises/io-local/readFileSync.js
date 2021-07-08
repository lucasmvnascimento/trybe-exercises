const fs = require('fs/promises');

fs.writeFile('./arquivo.txt', 'Escrevendo Texto')
  .then (() => console.log('Arquivo Escrito Com Sucesso'))
  .catch((err) => console.error(`Erro ao escrever o arquivo: ${err.message}`));