import { AppUi } from './AppUi';
import './App.css';
import React from 'react';
import { TodoProvider } from "../TodoContext"

function App() {

    return(
      <TodoProvider>
        <AppUi />
      </TodoProvider>
    );

  
}

export default App;
