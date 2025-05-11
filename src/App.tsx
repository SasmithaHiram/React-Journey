import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Sri Lanka", "India", "New York"];

  return (
    <div>
      <ListGroup
        heading="Countries"
        items={items}
        onSelectItem={() => console.log(items)}
      ></ListGroup>
    </div>
  );
}

export default App;
