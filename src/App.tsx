import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    topping: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, topping: [...pizza.topping, "Chesse"] });
  };

  console.log(pizza);

  return <div></div>;
}

export default App;
