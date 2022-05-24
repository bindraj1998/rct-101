import React, { useState } from "react";
import Task from "../Task/Task";
import Tasks from "../Tasks/Tasks";
import styles from "./addTask.module.css";
// import Tasks from "../AddTask/AddTask"


const AddTask = () => {

  let [newtodo, settodo]=useState("")
  const[todos,settodos]=useState([])

const han =(e)=>{
  settodo(e.target.value)
}

const ondelete=(id)=>{
  let newtod=todos.filter((todo)=>todo.id!==id);
  settodos(newtod)
}


  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input className={styles.in} value={newtodo} data-cy="add-task-input" type="text" onChange={han}  placeholder="Add task..."/>
      <button className={styles.bu} data-cy="add-task-button"  onClick={()=>{
       settodos([...todos,{id:Date.now(),value:newtodo, iscomp:false}])
settodo("")
      }}  >+</button>
      {todos.map((todo)=>(
    // <Tasks/>
    <Task key={(todo.id)} todo={todo}  ondelete={ondelete}/>
      ))}
      
    </div>
  );
};

export default AddTask;
