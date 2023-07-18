import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { Todolist } from './Todolist';
import { TodoItem } from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import './App.css';
import React from 'react';



function useLocalStorage(itemName,initialValue) {

  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){

    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;

  }else{

    parsedItem = JSON.parse(localStorageItem);

  }

  const [item,setItem] = React.useState(parsedItem);

  const saveTodos = (newItem) => {

    localStorage.setItem(itemName, JSON.stringify(newItem));
    
    setItem(newItem);

  };

  return [item,saveTodos];

}


function App() {

  const [valorinput, setValorInput] = React.useState("");

  const [todoCompleted, saveTodos] = useLocalStorage('TAREAS_V1',[]);
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
