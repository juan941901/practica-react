import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';


function TodoCounter() {

  const  {
    completdTodo,
    totalTodo
}  = React.useContext(TodoContext);

    return (
  
      <h1 className="TodoCounter">
        Has Completado <span>{completdTodo}</span>  de <span>{totalTodo}</span> ToDo
      </h1>
  
    );
  
  
  }
  
  export{TodoCounter};