import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';



const ItemList = ({ items }) => (
  <div className={styles.wrap}>
    <ul  className={styles.item_list}>
      {items.map(item => <li  key={item.value} className={styles.item}>
        <FormControlLabel
          control={
            <Checkbox checked={item.isDone}
              color="secondary"
              icon={<FavoriteBorder />} checkedIcon={<Favorite />} 
            />
          }
          label=<Item value={item.value} isDone={item.isDone} />
        />

        <IconButton aria-label='delete'>
          <DeleteOutlinedIcon fontSize='small' />
        </IconButton>
      </li>)}
    </ul>
  </div>
);

export default ItemList;