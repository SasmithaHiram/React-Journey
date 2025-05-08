import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  return (
    <Fragment>
        <h1>List Group</h1>
        <ul className="list-group">
          <li className="list-group-item active" aria-current="true">
            An active item
          </li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
    </Fragment>
  );
}

export default ListGroup;
