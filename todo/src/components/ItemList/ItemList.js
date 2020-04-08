import React from 'react';
import Item from '../Item/Item'

const ItemList = ({ todoItem }) => (
    <ul style ={{
      fontSize: 20,
    }}>
      <li><Item todoItem={todoItem} /></li>
      <li><Item todoItem={'Приготовить поесть'} /></li>
      <li><Item todoItem={'Убрать в комнате'} /></li>
    </ul>
);

export default ItemList;