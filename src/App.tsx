import { useState } from "react";
import ExpenceList from "./ExpenceTracker/components/ExpenceList";
import ExpenseFilter from "./ExpenceTracker/components/ExpenseFilter";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Test", amount: 10, category: "Utilities" },
    { id: 2, description: "Test", amount: 10, category: "Utilities" },
    { id: 1, description: "Test", amount: 10, category: "Utilities" },
  ]);

  if (expenses.length === 0) {
    return null;
  }

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectedCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenceList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
