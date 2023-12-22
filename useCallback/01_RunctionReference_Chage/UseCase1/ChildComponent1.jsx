import React from "react";

const ChildComponent = ({ onItemClick }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={onItemClick}>Click me</button>
    </div>
  );
};

export default ChildComponent;
