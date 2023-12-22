import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  // State variable count
  const [count, setCount] = useState(0);

  // Function reference changes based on count
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
//   otherValue: 'some value'
//   handleItemClick: fn1

// Render 2 (count updated):
//   count: 1
//   otherValue: 'some value'
//   handleItemClick: fn2 (new reference)
  
// Render 3 (otherValue updated):
//   count: 1
//   otherValue: 'new value'
//   handleItemClick: fn3 (new reference)
  
// ... and so on.
