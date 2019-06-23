import React from 'react';
import '../App.css';
import Series from './Series';
import Movies from './Movies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Movies/>
          <Series/>
      </header>
    </div>
  );
}

export default App;
