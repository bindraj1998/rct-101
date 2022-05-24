import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  let count = 0;
  const [coun,setcount]=useState(count)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button className={styles.blue} data-cy="task-counter-increment-button" onClick={()=>setcount(coun+1)}>+</button>
      <span data-cy="task-counter-value">{coun}</span>
      <button className={styles.blue} data-cy="task-counter-decrement-button" onClick={()=>setcount(coun-1)}>-</button>
    </div>
  );
};

export default Counter;
