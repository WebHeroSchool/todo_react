import React, {useContext} from 'react';
import styles from './SortingItems.module.css';
import classnames from 'classnames';
import {TaskListContext} from '../../context/TaskListContext';



const SortingItems = () => {

  const {allItems, activeItems, complitedItems, sortItem, onClickSorting} = useContext(TaskListContext)

  return (
  <div className={styles.sorting}>
    <div className={styles.button_wrap}>
      <button
          className={classnames({
            [styles.button]: true,
            [styles.button_all]: sortItem === 'all',
          })}
          onClick={() => onClickSorting('all')}
        >
          All<p className={styles.count}>{allItems.length}</p>
      </button>
      <button
        className={classnames({
          [styles.button]: true,
          [styles.button_active]: sortItem === 'Active',
        })}
        onClick={() => onClickSorting('Active')}
      >
        Active<p className={styles.count}>{activeItems.length}</p>
      </button>
      <button
        className={classnames({
          [styles.button]: true,
          [styles.button_active]: sortItem === 'Complited',
        })}
        onClick={() => onClickSorting('Complited')}
      >
        Complited<p className={styles.count}>{complitedItems.length}</p>
      </button>
    </div>
  </div>
);}

export default SortingItems;







