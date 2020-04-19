import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import IconButton from '@material-ui/core/IconButton';



const ItemList = ({ items, onClickDone, onClickDelete }) => (
  <div className={styles.wrap}>
    <ul  className={styles.item_list}>
      {items.map(item => <li  key={item.id} className={styles.item}>
        <FormControlLabel
          control={
            <Checkbox 
              checked={item.isDone}
              color="secondary"
              icon={<FavoriteBorder />} 
              checkedIcon={<Favorite />} 
              onClick={() => onClickDone(item.id)}
            />
          }
          label=<Item value={item.value} isDone={item.isDone} />
        />

        <IconButton aria-label='delete' onClick={() => onClickDelete(item.id)}>
          <DeleteOutlinedIcon fontSize='small' />
        </IconButton>
      </li>)}
    </ul>
  </div>
);

Checkbox.defaultProps = {
  isDone: false
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default ItemList;

