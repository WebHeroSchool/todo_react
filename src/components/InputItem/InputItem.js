import React, {useContext, useState, useEffect} from 'react';
import styles from './InputItem.module.css';
import {TaskListContext} from '../../context/TaskListContext';

const InputItem = () => {
   const {onClickAdd , clearList, editTask, editItem, theSame } = useContext(TaskListContext);

   const[value, setValue] = useState('');
   
   const handleChange = e => {
    setValue(e.target.value.toLowerCase())
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
                className={!theSame ? styles.task_input : styles.task_input_error}
                placeholder={!theSame ? "What needs to be done?" : "The task's already been added"}
                required
                
            />
            <div className={styles.buttons}>
                <button type="submit" className={styles.add_task}>
                {editItem ? 'Edit Task' : 'Add Task'}</button>
                <button onClick={clearList} className={styles.clear_btn}>Clear all</button>
            </div>  
        </form>
    )
}

export default InputItem;

