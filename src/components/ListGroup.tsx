function ListGroup() {
  const items = ["Sri Lanka", "India", "New York", "Canada"];

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          Countries
        </li>
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
