import React from 'react';
import './TodoSearch.css';
import {TodoContext} from '../TodoContext';



function TodoSearch() {

  const   {
    valorinput,
    setValorInput
}  = React.useContext(TodoContext); 

  return (
  
      <input 
        className='TodoSearch'
        value={valorinput}
        placeholder="Cortar cebolla"
        onChange={(event) => {

        setValorInput(event.target.value);

      }} />
  
    );
  
  
  }
  
  export{TodoSearch};