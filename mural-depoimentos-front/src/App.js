import logo from './logo.svg';
import './App.css';
import Depoimento from './components/Depoimento';
import FormDepoiment from './components/FormDepoiment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mural de depoimentos</h1>
      </header>
      <main>
        <Depoimento img={ logo } text='sdsd' userName='Marlon' />
        <FormDepoiment />
      </main>
    </div>
  );
}

export default App;
