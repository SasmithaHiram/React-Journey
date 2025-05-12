import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Sasmitha",
    },
  });

  const hadleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  return <div></div>;
}

export default App;
