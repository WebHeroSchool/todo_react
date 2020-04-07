import React from 'react';
import Item from '../Item/Item'

const ItemList = () => (
    <ul style ={{
      fontSize: 20,
    }}>
      <li><Item /></li>
      <li><Item /></li>
      <li><Item /></li>
    </ul>
);

export default ItemList;