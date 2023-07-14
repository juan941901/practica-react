import {CompleteIcon} from "./completeIcon";
import {DeleteIcon} from "./deleteIcon";

import "./TodoItem.css";

function TodoItem({text, completed,completaTarea,borrarTarea}) {

    return (
  
      <li className="TodoItem">
        <CompleteIcon 
          completa={completed}
          onComplete={completaTarea}
        />
        {/* <span 
          className={`Icon Icon-check ${completed && "Icon-check--active"}`} 
          onClick={completaTarea}
        >V</span> */}
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>

        <DeleteIcon
          onDelete={borrarTarea}
        />
        {/* <span 
          className="Icon Icon-delete"
          onClick={borrarTarea}
        >X</span> */}
      </li>
  
    );
  
  
  }

  export {TodoItem};