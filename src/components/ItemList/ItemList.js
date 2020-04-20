import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css'
import PropTypes from 'prop-types'


const ItemList = ({ items, onClickDone, onClickDelete }) => (
  <div className={styles.wrap}>
    <ul  className={styles.item_list}>
      {items.map(item => <li  key={item.id} className={styles.item}>
        <Item 
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
          value={item.value}
          isDone={item.isDone}
          id={item.id}
        />
      </li>)}
    </ul>
  </div>
);

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default ItemList;

