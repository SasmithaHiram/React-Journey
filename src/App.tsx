import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Sri Lanka", "India", "New York", "Canada"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
