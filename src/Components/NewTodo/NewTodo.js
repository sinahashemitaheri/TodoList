import React, { useState } from "react";
const NewTodo = (props) => {
    const [input,setInput]=useState("")
    const formHandler=(e)=>{
        e.preventDefault()
        props.addTodo(input)
        setInput("")
    }
    return (
        <div>
            <form onSubmit={formHandler} style={{textAlign:"center", marginTop :"30px"}}>
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" value={input} onChange={(e)=>setInput(e.target.value)} aria-describedby="emailHelp" style={{width:"840px" ,margin:"auto",direction:"rtl" }} placeholder="فعالیت مورد نظر را بنویسید" />
                </div>
                <button type="submit" className="btn btn-success" style={{marginBottom:"20PX"}}>اضافه کردن</button>
            </form>
        </div>
    )
}
export default NewTodo