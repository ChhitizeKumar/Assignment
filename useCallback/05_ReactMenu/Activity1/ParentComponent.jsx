import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [items, setItems] = useState([
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
  ]);

  // Use useCallback to memoize the callback function
  const handleItemClick = useCallback((itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      )
    );
  }, []); // No dependencies specified

  return (
    <div>
      <h2>Parent Component</h2>
      <ul>
        {items.map((item) => (
          // Use React.memo to memoize the ChildComponent
          <React.memo key={item.id}>
            <ChildComponent item={item} onItemClick={handleItemClick} />
          </React.memo>
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent;
