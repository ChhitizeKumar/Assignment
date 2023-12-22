import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";


//Without Dependency Array
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
  }, []); // No dependencies, as the function doesn't reference external variables

  return (
    <div>
      <h2>Parent Component</h2>
      <ul>
        {items.map((item) => (
          <ChildComponent
            key={item.id}
            item={item}
            onItemClick={handleItemClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent;




//With Dependency Array
import React, { useState, useCallback } from "react";
import Item from "./Item";

const ParentComponent = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  // Solution: useCallback with 'items' as a dependency
  const handleItemClick = useCallback(
    (itemId) => {
      console.log(`Item clicked: ${itemId}`);
    },
    [items] // 'items' is specified as a dependency
  );

  return (
    <div>
      <h2>Parent Component</h2>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onItemClick={handleItemClick} />
        ))}
      </ul>
    </div>
  );
};
