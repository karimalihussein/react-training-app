import { useState } from "react";
import ExpenseList from "./components/tracker/components/ExpenseList";
import ExpensesFilter from "./components/tracker/components/ExpensesFilter";

function App() {
    const [selectedCategory, setSelectedCategory] = useState('' as string);
    const [expenses, setExpenses] = useState([
        { id: 1, description: "Course For Java", amount: 100, category: "Education" },
        { id: 4, description: "Course For Vue", amount: 400, category: "Education" },
        { id: 2, description: "Potato", amount: 10, category: "Groceries" },
        { id: 3, description: "Tomato", amount: 32, category: "Groceries" },
        { id: 5, description: "Onion", amount: 20, category: "Groceries" },
        { id: 6, description: "Electricity Bill", amount: 1000, category: "Utilities" },
        { id: 7, description: "Water Bill", amount: 500, category: "Utilities" },
        { id: 8, description: "Netflix", amount: 100, category: "Entertainment" },
        { id: 9, description: "Amazon Prime", amount: 200, category: "Entertainment" },

    ]);

    const filteredExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;
    return (
        <div className="container">
            <br />
            <div className="row">
            <div className="mb-3">
                <ExpensesFilter onSelectCategory={(category) => setSelectedCategory(category)} />
            </div>
            <div className="mb-3">
                <ExpenseList expenses={filteredExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} />
            </div>
            </div>
        </div>
    )
}


export default App;
