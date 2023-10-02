import useRandomJoke from "./hooks/useRandomJoke";
import useCategories from "./hooks/useCategories";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");
  const joke = useRandomJoke(category);
  const categories = useCategories();

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>
        <h2>{joke}</h2>

        <form>
          <select onChange={(e) => setCategory(e.target.value)}>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </form>
      </center>
    </div>
  );
}

export default App;
