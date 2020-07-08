import React, {createContext, useState, useEffect} from 'react';
import {v4 as uuid} from 'uuid'


export const TaskListContext = createContext()

const TaskListContextProvider = props => {

  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(initialState);
  const [editItem, setEditItem] = useState(null);
  const [sortItem, setSortItem] = useState('all');
  
  const allItems = tasks;
  const activeItems = tasks.filter(item => !item.isDone);
  const complitedItems = tasks.filter(item => item.isDone);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  
  const onClickDone = id => {
    const newItemList = tasks.map(item => {
      const newItem = { ...item };
      
      if (item.id === id) {
        newItem.isDone = !item.isDone
      }
      return newItem
    });
    setTasks(newItemList);
  }

  const onClickClearCompleted = () => {
    const newItemList = tasks.filter(item => item.isDone === false);
    setTasks(newItemList);
    
  }

  const onClickAdd  = (value) => {
    setTasks([...tasks, { value, id: uuid(), isDone: false }]);
     
  }

  const onClickDelete = id => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const clearList = () => {
    setTasks([]);
  }

  const findItem = id => {
    const item = tasks.find(task => task.id === id)
    setEditItem(item);
  }

  const editTask = (value, id) => {
    const newTasks = tasks.map(task => (task.id === id ? { value, id } : task))
    setTasks(newTasks);
    setEditItem(null)
  }

  const onClickSorting = (sorting) => setSortItem(sorting);

  let sortingItems;
  switch (sortItem) {
    case 'all':
      sortingItems = tasks;
      break;
    case 'Active':
      sortingItems = tasks.filter((item) => !item.isDone);
      break;
    case 'Complited':
      sortingItems = tasks.filter((item) => item.isDone);
      break;
    default:
      sortingItems = tasks;
  }


 return (
    <TaskListContext.Provider value={{ 
      tasks,
      onClickAdd,
      onClickDelete,
      clearList,
      findItem,
      editTask, 
      editItem,
      allItems,
      activeItems,
      complitedItems,
      sortingItems,
      onClickSorting,
      onClickDone,
      onClickClearCompleted,
      sortItem

    }}>
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider;
