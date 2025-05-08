function ListGroup() {
  let items = ["Sri Lanka", "India", "New York", "Canada"];
  items = [];

  const getMessage = () => {
    return items.length === 0 ? <p>Not Found</p> : null;
  };

  return (
    <>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          Countries
        </li>
        {getMessage()}
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
