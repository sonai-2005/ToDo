import React from 'react';

export const Todo = ({ todo ,onDelete}) => {
  return (
    <div className='m-3'>
    <h3><p>{todo.sno} : {todo.title}</p></h3>
      <p>{todo.desc}</p>
      <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  );
};
