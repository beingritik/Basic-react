import './App.css';
import Header from "./myComponents/Header";
import {Todos} from "./myComponents/Todos";
import TodoItem from "./myComponents/TodoItem";
import {Footer} from "./myComponents/Footer";
import {Addtodo} from "./myComponents/Addtodo";
import React ,{useState} from 'react';


function App() {
  const onDelete=(todo)=>{
    console.log("Deleted item",todo);
    setTodos(todos.filter((e)=>{
     return e!==todo;
    }
    ))
  }
  const [todos,setTodos] =useState([
    {
      sno:1,
      work: "Wake-up"
    },
    {
      sno:2,
      work: "Gardening"
    }
  ]);
  return (
   <><Header title="My Todos List"/>
   <Addtodo/>
   <Todos todos={todos} onDelete ={onDelete}/>
   <Footer/></>
 
  );
}

export default App;
