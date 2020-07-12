import React, {useContext} from 'react';
import {TaskListContext} from '../../context/TaskListContext';
import styles from './ItemList.module.css'
import Item from '../Item/Item';


const ItemList = () => {
  const {sortingItems} = useContext(TaskListContext);
   return (
    <div className={styles.wrap} >
     {sortingItems.length ? (
       <ul className={styles.item_list}>
        {sortingItems.map(task => {
          return <Item task={task} key={task.id} />
        })}
       </ul>)
       : (
        <div className={styles.no_tasks}>No tasks</div>
       ) 
     }
    </div>
  )
 }
 
 export default ItemList;
