import { useState, useEffect } from "react";

function useCategories() {
  const [categories, setCategories] = useState([]);
  const apiUrl = "https://api.chucknorris.io/jokes/categories";

  useEffect(() => {
    const response = async () =>
      await fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          setCategories(data);
        });
    response();
  }, [apiUrl]);

  return categories;
}

export default useCategories;
