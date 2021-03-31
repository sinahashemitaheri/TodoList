import React from "react"
const EditTodo=(props)=>{
    return (
        <div className="col-6 mb-2" style={{margin:"auto", marginTop:"30px" ,backgroundColor:"#fafafafa"}}>
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                <input value={props.text} className={form-control}/>
                </div>
                <div>
                    <button type="button" className="btn btn-info btn-sm">ویرایش </button>
                     </div>
            </div>
        </div>
    )
}