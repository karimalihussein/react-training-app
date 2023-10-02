import { useState, useEffect } from "react";

function useRandomJoke(category) {
  const [joke, setJoke] = useState("");
  const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;

  useEffect(() => {
    const response = async () =>
      await fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          setJoke(data.value);
        });
    response();
  }, [apiUrl, category]);

  return joke;
}

export default useRandomJoke;
