import React from "react";
import AddTask from "../AddTask/AddTask";
import Task from "../Task/Task";
import TaskHeader from "../TaskHeader/TaskHeader";
import styles from "./tasks.module.css";

const Tasks = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
           <TaskHeader/>
        <AddTask/>
        {/* <Task/> */}

      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
    
      </div>
    </>
  );
};

export default Tasks;
