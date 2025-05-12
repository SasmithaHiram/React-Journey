import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: "Product 1",
        qty: 1,
      },
      {
        id: 2,
        title: "Product 2",
        qty: 2,
      },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, qty: item.qty + 1 } : item
      ),
    });
  };
  console.log(cart);

  return (
    <div>
      <Button onQty={handleClick} color="primary">
        Add QTY
      </Button>
    </div>
  );
}

export default App;
