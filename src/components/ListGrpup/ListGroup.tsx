import { useState } from "react";
import './ListGroup.css';

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// import { Fragment } from "react";
function ListGroup({items, heading, onSelectItem}: Props) {
  // items = [];
  const getMessage = () => {
    return items.length === 0 ? "There are no items to display" : null;
  };

  const handleOnClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    console.log(event);
  };

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{ heading }</h1>
      {items.length === 0 && <p>There are no items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            className={`list-group-item ${
              index === selectedIndex ? "active" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
