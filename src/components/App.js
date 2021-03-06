import './App.css';
import Dictionary from './dictionary/Dictionary';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className='App-header'>
          <h1>Dictionary</h1>
        </header>
        <main className='App-body'>
          <Dictionary />
        </main>
        <footer className='App-footer'>
          <small>Coded by Gulmira</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
