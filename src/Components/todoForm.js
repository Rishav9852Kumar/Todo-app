import React ,{useState,useContext} from "react";
import{
   FormGroup,
   Input,
   Button,
   Form,
   InputGroup,
   CardGroup
} from "reactstrap";

import {v4} from "uuid"
import {TodoContext} from "../context/TodoContext"
import {ADD_TODO} from "../context/action.types"

const TodoForm = () =>{
    //Defining a State where we staore the values//
    const [todoString,setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext);


    const handleSubmit = e=>{
        e.preventDefault();
        if(todoString === "")
        {
            return alert("Please Enter a Todo");
        }
        const todo ={
            todoString,
            id: v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        setTodoString("");
    }
    return(
        <Form onSubmit ={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input 
                type="text"
                name="todo"
                id="todo"
                placeholder="Your next To DO "
                //Initialising the variable value to the todoString//
                value={todoString}
                onChange={e => setTodoString(e.target.value)}
                />
                <CardGroup >
                    <Button color="warning">Add</Button>
               </CardGroup>
                </InputGroup>
            </FormGroup>

        </Form>

    );
}
export default TodoForm;