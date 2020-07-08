import React from 'react';
import ItemList from '../ItemList/ItemList';
import TaskListContextProvider from '../../context/TaskListContext';
import styles from './Todo.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputItem from '../InputItem/InputItem';
import TodoHeader from '../TodoHeader/TodoHeader';
import Footer from '../Footer/Footer';

const Todo = () => {
  return (
    <TaskListContextProvider>
      <div className={styles.wrap}>
        <Card>
          <CardContent className={styles.content}>
            <TodoHeader />
            <InputItem />
            <ItemList />
            <Footer />
          </CardContent>
        </Card>
      </div>
    </TaskListContextProvider>
  )
}

export default Todo
