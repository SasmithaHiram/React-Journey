import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: 'Bug 1',
      fixed: false
    },

    {
      id: 2,
      title: 'Bug 2',
      fixed: false
    },
    {
      id: 3,
      title: 'Bug 3',
      fixed: false
    }

    
  ])
  const handleClick = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug))
  };

  console.log(bugs);

  return (
    <div>
      <Button color="primary" onClick={handleClick}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
