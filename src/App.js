import React, { useState } from "react"
import NewTodo from "./Components/NewTodo/NewTodo"
import TodoList from "./Components/TodoList/TodoList";
import './App.css';
import Todo from "./Components/Todo";
const App =()=>{
const [todos,settodos]=useState([])
const addertodo=(text)=>{
  if(text.length)
settodos([...todos,text])
}
const DeleteHandler=(id)=>{
  const newdata=[...todos].filter((txt)=>txt!==id)
  settodos(newdata)
}
  return(
    <div>
      <h3 style={{textAlign:"center", marginTop:"30px", color:"#fafaa"}}>برنامه ریزی روزانه</h3>
        <NewTodo addTodo={addertodo}/> 
        <TodoList todos={todos} Delete={DeleteHandler}/>
    </div>
  )
}
export default App