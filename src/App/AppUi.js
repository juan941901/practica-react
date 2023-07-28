import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { Todolist } from '../Todolist';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {TodosLoading} from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext} from '../TodoContext';
import React from 'react';

function AppUi(){

  const {
    loading,
    error,
    completeTodo,
    deleteTodo,
    filtroValores,
    openModal,
    setOpenModal
        } = React.useContext(TodoContext);

return (
    
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />
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
    <CreateTodoButton
    
    setOpenModal = {setOpenModal}
    
    />

    {openModal && (

      <Modal>

        <TodoForm />

      </Modal>


    )}

    </React.Fragment>
  
);

}

export  { AppUi };