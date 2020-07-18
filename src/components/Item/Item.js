import React, {useContext} from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {TaskListContext} from '../../context/TaskListContext';

const Item = ({task}) => {
const {onClickDelete, findItem, onClickDone} = useContext(TaskListContext)
return (
  <li className={styles.item}>
  <div className={styles.content}>
    <FormControlLabel
      control={
        <Checkbox 
          checked={task.isDone}
          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
          checkedIcon={<CheckBoxIcon fontSize="small" />}
          onClick={() => onClickDone(task.id)}
        />
      }
      label={<span className={
        classnames({
          [styles.item]: true,
          [styles.done]: task.isDone
        })
      }>{task.value}</span>}
    />       
    <div className={styles.btn_wrap}>
      <button onClick={() => onClickDelete(task.id)}  className={styles.task_btn}>
        <i style={{color: '#999',fontSize: 14}} className='fas fa-trash-alt' />
      </button>
      <button onClick={() => findItem(task.id)}  className={styles.task_btn}>
        <i style={{color: '#999',fontSize: 14}} className='fas fa-pen'></i>
      </button>
    </div>
  </div>
  </li>      
)}

export default Item;

