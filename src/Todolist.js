import './TodoList.css'

function Todolist(props) {

    return (
  
      <ul className="Todolist">

        {props.children}

      </ul>
  
    );
  
  
  }
  
  export{Todolist};