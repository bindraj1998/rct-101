import React, { useState } from "react";
import Counter from "../Counter/Counter";
import TaskHeader from "../TaskHeader/TaskHeader";
import styles from "./task.module.css";

const Task = ({todo,ondelete}) => {
  const [iscomp,setiscomp]=useState(todo.iscomp)
  // console.log(props.todo.value)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" 
      checked={iscomp}
      onChange={(e)=>{
        setiscomp(!iscomp)
      }}
      
      />
      <div className={iscomp ? styles.st :""} data-cy="task-text">{todo.value}</div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button" onClick={()=>ondelete(todo.id)}>X</button>
        {/* <TaskHeader iscomp={iscomp} /> */}
    </li>
  );
};

export default Task;
