import React from 'react';
import './TodoSearch.css';



function TodoSearch({valorinput,setValorInput}) {

  

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