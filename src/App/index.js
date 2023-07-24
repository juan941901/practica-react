import { AppUi } from './AppUi';
import { useLocalStorage } from './useLocalStorage';
import './App.css';
import React from 'react';

function App() {

  const [valorinput, setValorInput] = React.useState("");

  const {
          item: todoCompleted,
          saveTodos,
          loading,
          error
  
   } = useLocalStorage('TAREAS_V1',[]);

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

    return(

      <AppUi 
      
        loading = {loading}
        error = {error}
        completdTodo = {completdTodo}
        totalTodo = {totalTodo}
        completeTodo = {completeTodo}
        deleteTodo = {deleteTodo}
        valorinput = {valorinput}
        setValorInput = {setValorInput}
        filtroValores = {filtroValores}

      />

    );

  
}

export default App;
