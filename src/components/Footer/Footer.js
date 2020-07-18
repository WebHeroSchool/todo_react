import React, {useContext} from 'react';
import styles from './Footer.module.css';
import {TaskListContext} from '../../context/TaskListContext';
import SortingItems from '../SortingItems/SortingItems';

const Footer = () => {
  const {onClickClearCompleted} = useContext(TaskListContext);
  return (
    <footer className={styles.wrap}>
      <div className={styles.content}>
        <SortingItems /> 
        <div className={styles.delete}>
          <button onClick={() => onClickClearCompleted()} className={styles.btn_delete}>Clear completed</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
