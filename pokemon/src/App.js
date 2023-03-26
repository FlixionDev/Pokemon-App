import logo from './logo.svg';
import './App.css';
import Allpokemon from './Components/Allpokemon/Allpokemon';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allpokemon/>
    </div>
  );
}

export default App;
