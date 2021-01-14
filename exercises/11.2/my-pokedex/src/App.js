import logo from './logo.svg';
import Pokemon from './Pokemon.js'
import pokemons from './data.js';
import Pokedex from './Pokedex.js'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className='pokemons-container'>
        <Pokedex pokemons={pokemons} />
      </div>
      
    </div>
  );
}

export default App;
