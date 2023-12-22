import React, { useState, useCallback } from "react";

const ClickCounter = () => {
  const [clickCount, setClickCount] = useState(0);

  // Increment function without dependency array
  const incrementWithoutDependency = useCallback(() => {
    setClickCount(clickCount + 1);
  }, []); // Empty dependency array means no dependencies are specified

  // Increment function with dependency array
  const incrementWithDependency = useCallback(() => {
    setClickCount((prevClickCount) => prevClickCount + 1);
  }, [setClickCount]); // Dependency array includes setClickCount

  return (
    <div>
      <h2>Click Counter</h2>
      <p>Click Count: {clickCount}</p>

      <button onClick={incrementWithoutDependency}>
        Increment Without Dependency
      </button>

      <button onClick={incrementWithDependency}>
        Increment With Dependency
      </button>
    </div>
  );
};

export default ClickCounter;
