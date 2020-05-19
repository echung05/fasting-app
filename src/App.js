import React from 'react';
import './App.css';
import NavB from './Navbar'
import Timer from './Timer'
import History from './History'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavB/>
        <Timer/>
        <History/>
      </header>
    </div>
  );
}

export default App;
