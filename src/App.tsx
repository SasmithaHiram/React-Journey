import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };

  return (
    <div>
      <Button color="primary" onClick={handleClick}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
