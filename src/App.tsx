import { useState } from "react";
import ExpenceList from "./ExpenceTracker/components/ExpenceList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Test", amount: 10, category: "Util" },
    { id: 2, description: "Test", amount: 10, category: "Util" },
    { id: 1, description: "Test", amount: 10, category: "Util" },
  ]);

  if (expenses.length === 0) {
    return null;
  }

  return (
    <div>
      <ExpenceList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
