import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { Todolist } from '../Todolist';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import React from 'react';

function AppUi(
    {
        loading,
        error,
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

      {loading && <p>Estamos cargando..</p>}
      {error && <p>Desesperate, hubo un error !</p>}
      {!loading && filtroValores.length===0 && <p>No hay tareas</p>}
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