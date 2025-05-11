import { useState } from "react";
import Button from "./components/Button";

function App() {
const [customer, setCustomer] = useState({
  name: "Sasmitha",
  address: {
    city: "Kiribathgoda",
    zipCode: "1234"
  }
})
  const handleClick = () => {
    setCustomer({...customer, address: {...customer.address, zipCode: "11640"}})
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
