import React from 'react'
import Items from './Items'
import { useContext } from 'react';
import { todoContext } from '../store/todoContext';

function ItemList() {
  const {todoList , deleteItems} = useContext(todoContext);
  return (
    <>
     {todoList.map((todoList, idx) =>
        <Items key={idx}
        todoName={todoList.name} 
        todoDate={todoList.date}  
        onDelete={(event) => deleteItems(todoList.name)}/>
      )}
    </>
  )
}

export default ItemList
  