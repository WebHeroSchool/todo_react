import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    const items = [
      { id: 0, value: 'Выполнить задание', isDone: true },
      { id: 1, value: 'Приготовить поесть', isDone: false },
      { id: 2, value: 'Убрать в комнате', isDone: true },
      { id: 3, value: 'Сделать зарядку', isDone: false }
    ];
  
    const itemsToDo = items.filter(item => item.isDone === false)
  
    return (
      <div className={styles.wrap}>
        <div className={styles.content}>
          <h1 className={styles.title}>TODOS:</h1>
          <InputItem />
          <ItemList items={items} />
          <Footer count={itemsToDo.length} />
        </div>
      </div>);
  }
}

export default App;
