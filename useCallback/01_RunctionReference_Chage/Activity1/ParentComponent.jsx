import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Inline function creation in the render
  const handleItemClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Click count: {count}</p>
      <ChildComponent onItemClick={handleItemClick} />
    </div>
  );
};


// Render 1:
//   count: 0
//   handleItemClick: fn1

// Render 2 (count updated):
//   count: 1
//   handleItemClick: fn2 (new reference)
  
// Render 3 (count updated):
//   count: 2
//   handleItemClick: fn3 (new reference)
  
// ... and so on.
