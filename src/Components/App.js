import React from 'react';
import ReactDOM from 'react-dom'
import '../App.css';
import Series from './Series';
import Movies from './Movies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Diziler</h1>
          <Series/>
          <h1>Filmler</h1>
          <Movies/>
      </header>
    </div>
  );
}

export default App;
