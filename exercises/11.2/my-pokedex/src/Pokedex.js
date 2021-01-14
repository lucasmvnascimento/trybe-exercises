import React from 'react';
import './data.js'
import Pokemon from './Pokemon.js';


class Pokedex extends React.Component {
  render() {
    return this.props.pokemons.map(pokemon => <Pokemon pokemon={pokemon} />)
  }
}

export default Pokedex;