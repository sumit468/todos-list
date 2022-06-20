import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit =  (e) => {
        e.preventDefault();
        if(!title || ! desc){
            alert("Title or Description cannot be blank")
        }

        addTodo(title, desc)
    }
    return (
        <div className='container my-3'>
            <h3>Add a todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setTitle(e.target.value)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Todo Description</label>
                    <input type="text" value={desc} className="form-control" id="exampleInputPassword1" onChange={(e)=>{setDesc(e.target.value)}} />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
