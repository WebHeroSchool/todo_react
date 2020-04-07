import React from 'react';

const element = (<div>
  <p style ={{
  textAlign: 'center',
  fontSize: 36,
  color: 'pink',
  }}>My App</p>
</div>);

const ItemList = () => (
  <ul style ={{
    fontSize: 24,
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
