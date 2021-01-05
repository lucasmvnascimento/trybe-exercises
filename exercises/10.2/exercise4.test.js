const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

test ('Verifica se tem o repositorio a seguir: hackatrybe-covid' , async () => {
  const data = await getRepos('https://api.github.com/users/tryber/repos');
  expect(data).toContain('hackatrybe-covid');
})