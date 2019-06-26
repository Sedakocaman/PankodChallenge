import React from 'react';
import '../App.css';
import AppHeader from './header';
import Home from "./home";
import AppFooter from "./footer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader/>
          <Home/>
      </header>
        <AppFooter/>
    </div>
  );
}

export default App;
