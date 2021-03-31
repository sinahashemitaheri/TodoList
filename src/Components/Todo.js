import React from "react"
const Todo =(props)=>{
    return (
        <div className="col-6 mb-2" style={{marginTop:"60px" , margin:"AUTO"}}>
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                    {props.text}
                </div>
                <div>
                    <button type="button" className="btn btn-danger btn-sm ml-1" onClick={()=>props.Delete(props.text)}>حذف</button>
                </div>
            </div>
        </div>
    )
}
export default Todo