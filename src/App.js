import React,{useReducer} from "react";
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./media/postercompetition.jpg";

import {TodoContext} from "./context/TodoContext";
import todoReducer from "./context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/todos";
 const App = () =>{
    const [todos ,dispatch ]=useReducer(todoReducer,[]);
    return(
      <TodoContext.Provider value={{todos,dispatch}}>
       <Container fluid>
        <div ><img className="rounded-circle hover-overlay img-thumbnail"src={logo} alt="logo"/></div> 
         <h1>Todo app with Contxt API</h1>
         <Todos/>
          <TodoForm/>
         
       </Container>
      </TodoContext.Provider>
    );
 } 
 export default App;