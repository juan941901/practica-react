import './TodoCounter.css';


function TodoCounter({total, completed}) {

    return (
  
      <h1 className="TodoCounter">
        Has Completado <span>{completed}</span>  de <span>{total}</span> ToDo
      </h1>
  
    );
  
  
  }
  
  export{TodoCounter};