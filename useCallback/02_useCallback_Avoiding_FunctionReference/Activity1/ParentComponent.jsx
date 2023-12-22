import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const handleItemClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependencies array includes only 'count'

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Click count: {count}</p>
      <ChildComponent onItemClick={handleItemClick} />
    </div>
  );
};

export default ParentComponent;
