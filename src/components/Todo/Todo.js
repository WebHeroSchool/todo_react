import React, {useState} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Todo = () => {
  const initialState = {
    items: [
      { id: 0, value: 'Выполнить задание', isDone: true },
      { id: 1, value: 'Приготовить поесть', isDone: false },
      { id: 2, value: 'Убрать в комнате', isDone: true },
      { id: 3, value: 'Сделать зарядку', isDone: false }
    ],
    count: 4,
    empty: false
  }

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);
  const [empty, setEmpty] = useState(initialState.empty);

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      
      if (item.id === id) {
        newItem.isDone = !item.isDone
      }
      return newItem
    });
    setItems(newItemList);
  }

  const onClickDelete = id => {
    const newItemList = items.filter(item => item.id !== id);
    setItems(newItemList);
    setCount(count => count - 1);
  }

  const itemsToDo = items.filter(item => item.isDone === false)
 
  const onClickAdd = value => {
    if (value !== '') {
      const newItemList = [
        ...items,
        {
          value,
          isDone: false,
          id: count + 1
        }
      ];
      setItems(newItemList);
      setCount(count => count + 1);
    } else {
      setEmpty(empty => !empty)
    }
  }

  return (
    <div className={styles.wrap}>
      <Card>
        <CardContent className={styles.content}>
          <h1 className={styles.title}>TODOS:</h1>
          <InputItem onClickAdd={onClickAdd} empty={empty} />
          <ItemList 
            items={items}
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
          />
          <Footer count={itemsToDo.length} />
        </CardContent> 
      </Card>
    </div>
  )
}

export default Todo;