import React from 'react';

const element = (<div>
  <h1 style ={{
  textAlign: 'center',
  color: 'pink',
  }}>My App</h1>
</div>);

const ItemList = () => (
  <ul style ={{
    fontSize: 20,
  }}>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
);

const App = () => (<div>
  {element}
  <ItemList />
</div>);

export default App;
