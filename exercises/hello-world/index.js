const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err,content) => {
      if(err) return reject(err);
      resolve(content);
    });
  });
};

readFilePromise('./arquivo.txt')
  .then((content) => console.log(`Lido arquivo com ${content.byteLength} bytes`))
  .catch((err) => console.log(`Erro ao ler arquivo: ${err.message}`));