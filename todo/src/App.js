import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const style ={
    fontSize: 40,
  };
  const var1 = 'variable';
  const num = 3;
  const num2 = 23;
  const bool = true;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Jsx-lesson">
          <p style={style}>Style</p>
          <p>{var1}</p>
          <p>{num}</p>
          <p>{num * num2}</p>
          <p>{bool && 'This is true'}</p>
          <p>{bool ? 'This is true': 'This is false'}</p>
          <p>
            {undefined}, 
            {null}, 
            {false}, 
            {true} 
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
