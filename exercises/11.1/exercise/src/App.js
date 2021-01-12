import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const compromissos = ['Dormir', 'Estudar', 'Jogar CS', 'Comer'];
  return (
    <div className="App">
      {compromissos.map((item) => task(item) )}     
    </div>
  );
}

export default App;
