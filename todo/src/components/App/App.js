import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todoItem = 'Выполнить задание';
const App = () => (<div>
  <h1 style ={{
  color: 'pink'
  }}>Важные дела:</h1>
  <InputItem />
  <ItemList todoItem={todoItem} />
  <Footer count={3} />
</div>);

export default App;
