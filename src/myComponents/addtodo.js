import React, { useState } from 'react';

export const Add = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("");
    const load = (e) => {
        e.preventDefault();
        if(!title || !desc)alert("title or description can't be empty ! ");
        else{
            
           props.AddToDo(title,desc);
        }
        setTitle("");
        setdesc("");
        console.log(title ,desc);
    };
    return (
        <div className='text-center' >
            <form onSubmit={load}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Add to do</label>
                    <div className="col-sm-10">
                        <input value={title} onChange={(e) => { setTitle (e.target.value) }} className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">description</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={(a) => { setdesc(a.target.value) }} value={desc} className="form-control" id="inputPassword3" />
                    </div>
                </div>


                <button type="submit" className="btn btn-success m-3">Add</button>
            </form>
        </div>
    )
}
