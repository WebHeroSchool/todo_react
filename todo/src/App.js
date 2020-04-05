import React from 'react';
import logo from './logo.svg';
import './App.css';
import{count, length} from "./number";

function App() {
  const style ={
    fontSize: 40
  };
  const var1 = 'variable';
  const number = 6;
  const number2 = 23;
  const bool = true;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{fontSize: 30, color: '#61DAFB'}}>Результат: {count * length}</p>
        <div className="Jsx">
          <p style={style}>Style</p>
          <p>{var1}</p>
          <p>{number}</p>
          <p>{number * number2}</p>
          <p style={{fontSize: 50, color: 'pink'}}>{bool && 'logical operation'}</p>
          <p>{bool ? 'true': 'false'}</p>
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
