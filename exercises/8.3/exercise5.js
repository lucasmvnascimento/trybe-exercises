
const assert = require('assert');
const { access } = require('fs');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {

  return names.reduce((acc,name) => {
    acc += name.split('').reduce((acumulator,letter) => {
      if (letter === 'a' || letter === 'A') return acumulator + 1;
      return acumulator;
    },0)
    return acc;
  },0)
}

assert.deepStrictEqual(containsA(), 20);