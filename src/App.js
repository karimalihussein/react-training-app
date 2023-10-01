import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Go to the market",
    "Buy food",
    "Make dinner",
  ]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    // This will fire off when we click the button
    // Stop the refresh
    e.preventDefault();
    // Add the input to the todos array
    setTodos([...todos, input]);
    // Clear the input field
    setInput("");
  };

  return (
    <div className="app">
      <form>
        <input
          type="text"
          placeholder="Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>

      <h2>Todos List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
