import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Sri Lanka", "India", "New York", "Canada"];

  return (
    <div>
      <ListGroup items={items} heading="Countries" />
    </div>
  );
}

export default App;
