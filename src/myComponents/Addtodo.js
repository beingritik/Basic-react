import React, { useState } from 'react'

export const Addtodo = () => {
    const [title,setTitle]=useState("");
    const[work,setwork]=useState("");
    const submit=()=>{

    }
  return (
    
    <form className="container" onSubmit={submit}>
        <h3>Add a Todo</h3>
  <div className="form-group" >
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" value={title} onChange={(e)=>{setTtitle(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter title."/>
    
  </div>
  <div class="form-group">
    <label for="work">Work</label>
    <input type="text" class="form-control" value={work} id="work" onChange={(e)=>{setwork(e.target.value)}}placeholder="Enter your work/task"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-secondary">Submit</button>
</form>
  )
}
