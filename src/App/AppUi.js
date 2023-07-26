import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { Todolist } from '../Todolist';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {TodosLoading} from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext} from '../TodoContext';
import React from 'react';

function AppUi(){

return (
    
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />
    <TodoContext.Consumer>
    {({
                loading,
                error,
                completeTodo,
                deleteTodo,
                filtroValores
            }) => (
      <Todolist>

      {loading && 
        <React.Fragment> 

            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
        
        </React.Fragment>
        }
      {error && <TodosError />}
      {!loading && filtroValores.length===0 && <EmptyTodos />}
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
    )}
    </TodoContext.Consumer>
    <CreateTodoButton />
    </React.Fragment>
  
);

}

export  { AppUi };