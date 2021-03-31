import React from "react";
import Todo from "../Todo";
const TodoList=(props)=>{
    return(
        <div>
            {props.todos.map((item)=><Todo text={item} Delete={props.Delete}/>)}
      
        </div>
    )
}
export default TodoList