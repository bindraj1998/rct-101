import React from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
        
      {/* Add Task */}
      <AddTask/>
      {/* Tasks */}
      <Tasks/>
    </div>
  );
};

export default TaskApp;
