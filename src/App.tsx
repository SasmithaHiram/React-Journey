import { useEffect } from "react";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

const App = () => {
  useEffect(() => {
    connect();
    return () => disconnect();
  });
  return <div></div>;
};

export default App;
