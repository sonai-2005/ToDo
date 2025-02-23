import React from 'react';
import { Todo } from './Todo.js';

export const List = (props) => {
  return (
    <div className="container">
      <h3 className='text-center'>ToDo List</h3>
      {(props.todos.length===0)? "No todos to display" : props.todos.map((todo) =>{
      return <Todo key={todo.sno} todo={todo} onDelete={props.onDelete} />;
    })
}
    </div>
  );
};