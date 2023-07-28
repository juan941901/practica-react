import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm(){

    const {

        setOpenModal,
        addTodo 


    } = React.useContext(TodoContext);

    const [newTodoValue,setNesTodoValue] = React.useState("");

    const onSubmit = (event) => {

            event.preventDefault();
            setOpenModal(false);
            addTodo(newTodoValue);
    };

    const onCancel = () => {

        setOpenModal(false);
};

    const onChange = (event) => {

        setNesTodoValue(event.target.value);
        
    };

    return(

        <form onSubmit={onSubmit}>

            <label>Escribe tu nuvea Tarea</label>
            <textarea 
                placeholder="Cortar cebolla para llorar"
                value = {newTodoValue}
                onChange={onChange}

            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button" 
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >Cancelar</button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>


        </form>

    );

}

export {TodoForm};