import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { Todolist } from './Todolist';
import { TodoItem } from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import './App.css';
import React from 'react';


// const defaultTodos = [
//   {text: 'Cortar cebolla', completed:true},
//   {text: 'Tomar el curso de intero de react.js', completed:false},
//   {text: 'Llorar con samuel', completed:false},
//   {text: 'lalala', completed:false}
// ];
// Funcion principal
function App() {

  const localStorageTodos = localStorage.getItem('TAREAS_V1');
  let parsedTodos;

  if(!localStorageTodos){

    localStorage.setItem('TAREAS_V1', JSON.stringify([]));
    parsedTodos = [];

  }else{

    parsedTodos = JSON.parse(localStorageTodos);

  }


  const [valorinput, setValorInput] = React.useState("");

  const [todoCompleted, setTodoCompleted] = React.useState(parsedTodos);
  const completdTodo = todoCompleted.filter(todoItem => todoItem.completed).length;
  const totalTodo    = todoCompleted.length;

  const filtroValores = todoCompleted.filter(texto => 
    
      {
       return texto.text.toLowerCase().includes(valorinput.toLocaleLowerCase());
      }
    
    );

    const completeTodo = (texto) => {

      const nuevaLista = [...todoCompleted];
      const indexTodo = nuevaLista.findIndex(

        (datos) => datos.text === texto

      );

      if(nuevaLista[indexTodo].completed){

        nuevaLista[indexTodo].completed = false;

      }else{

        nuevaLista[indexTodo].completed = true;

      }
      
      saveTodos(nuevaLista);

    };
    
    const saveTodos = (newTodo) => {

      localStorage.setItem('TAREAS_V1', JSON.stringify(newTodo));
      
      setTodoCompleted(newTodo);

    };

    const deleteTodo = (texto) => {

      const nuevaLista = [...todoCompleted];
      const indexTodo = nuevaLista.findIndex(

        (datos) => datos.text === texto

      );

      nuevaLista.splice(indexTodo,1);
      
      saveTodos(nuevaLista);

    };


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

export default App;
