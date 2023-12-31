import React from "react";
import {useLocalStorage} from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){

    const [valorinput, setValorInput] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

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

    const addTodo = (text) => {

      const nuevaLista = [...todoCompleted];
      nuevaLista.push({
        text,
        completed:false
      });
      saveTodos(nuevaLista);
    };

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

        <TodoContext.Provider value={
            {
                loading,
                error,
                completdTodo,
                totalTodo,
                completeTodo,
                deleteTodo,
                valorinput,
                setValorInput,
                filtroValores,
                openModal,
                setOpenModal,
                addTodo
            }
        }>
            {children}
        </TodoContext.Provider>

    );

}

export { TodoContext, TodoProvider };