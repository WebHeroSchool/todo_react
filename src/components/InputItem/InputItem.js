import React, {useContext, useState, useEffect} from 'react';
import styles from './InputItem.module.css';
import {TaskListContext} from '../../context/TaskListContext';

const InputItem = () => {
   const {onClickAdd , clearList, editTask, editItem } = useContext(TaskListContext);

   const[value, setValue] = useState('')
   
   const handleChange = e => {
    setValue(e.target.value)
   };

   const handleSubmit = e => {
    e.preventDefault()
    if(editItem === null) {
        onClickAdd (value)
        setValue('')
    } else {
        editTask(value, editItem.id)
    }
    
   };

   useEffect(() => {
    if(editItem !== null) {
        setValue(editItem.value)
    } else {
        setValue('')
    }
   }, [editItem]);


    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input 
                onChange={handleChange}
                value={value}
                type="text" 
                className={styles.task_input}
                placeholder="What needs to be done?"
                required
            />
            <div className={styles.buttons}>
                <button type="submit" className={styles.btn} className={styles.add_task}>
                {editItem ? 'Edit Task' : 'Add Task'}</button>
                <button onClick={clearList} className={styles.btn} className={styles.clear_btn}>Clear all</button>
            </div>
            
        </form>
    )
}

export default InputItem;

