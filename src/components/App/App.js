import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class App extends React.Component {
  state = {
    items: [
      { id: 0, value: 'Выполнить задание', isDone: true },
      { id: 1, value: 'Приготовить поесть', isDone: false },
      { id: 2, value: 'Убрать в комнате', isDone: true },
      { id: 3, value: 'Сделать зарядку', isDone: false }
    ],
    count: 4,
    empty: false
    
  }

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({ items: newItemList});
  }

  onClickDelete = id => this.setState({ items: this.state.items.filter(item => item.id !== id) });
  
  onClickAdd = value => {
    if (value !== '') {
      this.setState(state => ({
        items: [
          ...state.items,
          {
            value,
            isDone: false,
            id: state.count + 1
          }
        ],
        count: state.count + 1,
        empty: false
      }));
    } else {
      this.setState(state => ({ empty: true }))
    }
  }

  render() {
    const itemsToDo = this.state.items.filter(item => item.isDone === false)
  
    return (
      <div className={styles.wrap}>
        <Card>
          <CardContent className={styles.content}>
            <h1 className={styles.title}>TODOS:</h1>
            <InputItem onClickAdd={this.onClickAdd} empty={this.state.empty} />
            <ItemList 
            items={this.state.items}
            onClickDone={this.onClickDone}
            onClickDelete={this.onClickDelete}
            />
           
            <Footer count={itemsToDo.length} />
          </CardContent> 
        </Card>
      </div>);
  }
}

export default App;
 

