const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

const fetchJoke = (API_URL, myObject) => {
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      const jokeContainer = document.querySelector('#jokeContainer');
      jokeContainer.innerText = data.joke;
    });
};

const promise = new Promise((resolve, rejected) => {
  const array = [];
  for (let index = 0; index < 10; index += 1) {
    array.push(Math.random() * 50);
  }
  console.log(array);
  const squareArray = array.map((number) => number * number);
  console.log(squareArray);
  const sum = squareArray.reduce((acc, value) => acc + value, 0);
  console.log(sum);
  if (sum < 8000) {
    let dividers = [2, 3, 5, 10];
    dividers = dividers.map((number) => (number /= sum));
    resolve(dividers);
  } else {
    rejected('É mais de oito mil! Essa promise deve estar quebrada!');
  }
})
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

window.onload = () => {
  fetchJoke(API_URL, myObject);
};
