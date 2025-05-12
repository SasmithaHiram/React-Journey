import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [tags, setTags] = useState(["happy", "cheerfull"]);

  const handleClick = () => {
    setTags([...tags, "exciting"]);

    setTags(tags.filter((tag) => tag !== "happy"));

    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  console.log(tags);

  return (
    <div>
      <Button color="primary" onClick={handleClick}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
