import React from "react";

const ChildComponent = React.memo(({ item, onItemClick }) => {
  console.log(`ChildComponent ${item.id} rendered`);

  return (
    <li>
      Item {item.id} - Click count: {item.count}
      <button onClick={() => onItemClick(item.id)}>Click me</button>
    </li>
  );
});

export default ChildComponent;
