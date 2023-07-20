import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { Todolist } from '../Todolist';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import React from 'react';

function AppUi(
    {
        completdTodo,
        totalTodo,
        completeTodo,
        deleteTodo,
        valorinput,
        setValorInput,
        filtroValores
    }
){

return (
    
    <React.Fragment>
    <TodoCounter 
    
      completed={completdTodo}
      total={totalTodo}
      
    />
    <TodoSearch
    
      valorinput = {valorinput}
      setValorInput = {setValorInput}
    
    />
    <Todolist>

      {filtroValores.map(todo => (

        <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed} 
          completaTarea={() => completeTodo(todo.text)}
          borrarTarea={() => deleteTodo(todo.text)} />

      ))
      }

    </Todolist>
    <CreateTodoButton />
    </React.Fragment>
  
);

}

export  { AppUi };