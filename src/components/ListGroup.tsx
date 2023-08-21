import { useState } from "react";

// import { Fragment } from "react";
function listGroup() {
  let items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "Phoenix",
    "San Antonio",
    "San Diego",
  ];
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
      <h1>List Group</h1>
      {items.length === 0 && <p>There are no items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              console.log(index);
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

export default listGroup;
