import { useState } from "react";

function ListGroup() {
  let items = ["Sri Lanka", "India", "New York", "Canada"];

  const [selectedIndex, setselectedIndex] = useState(-1);

  return (
    <>
      <ul className="list-group">
        <li className="list-group-item" aria-current="true">
          Countries
        </li>
        {items.length === 0 && <p>Not Found</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : 'list-group-item"'
            }
            key={item}
            onClick={() => {
              setselectedIndex(index);
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
