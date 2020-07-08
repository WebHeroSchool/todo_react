import React from 'react'
import styles from './TodoHeader.module.css';

const TodoHeader = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Task Manager</h1>
    </div>
  )
}

export default TodoHeader
