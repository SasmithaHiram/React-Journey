import type { MouseEvent } from "react";

function ListGroup() {
  let items = ["Sri Lanka", "India", "New York", "Canada"];

  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          Countries
        </li>
        {items.length === 0 && <p>Not Found</p>}
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
