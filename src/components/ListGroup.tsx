import { useState } from "react";

interface ListGroupProps {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ heading, items, onSelectItem }: ListGroupProps) {
  // State Management Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 && <p>No items found</p>;

  return (
    // The empty <> </> adds a fragment, to wrap different children elements
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
