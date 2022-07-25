import React from 'react'
import TodoItem from "../myComponents/TodoItem";
export const Todos = (props) => {
  return (
    <div> <h3 className='text-center'>Todos List</h3>
    {/* // {props.todos} */}
    {props.todos.length==0?"No Todos to display":
    props.todos.map((todo)=>{
        return <TodoItem todo={todo} onDelete={props.onDelete}/>
    })}
    
    </div>
  );
}
