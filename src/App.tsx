import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [data, setData] = useState<User[]>([]);
  const [error, setError] = useState<string>("");
  // get -> promise -> then -> catch
  useEffect(() => {
    const controller = new AbortController();
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
    .then((res) => setData(res.data))
    .catch((error) => {
        if(error instanceof CanceledError) return;
        if(error instanceof AxiosError) setError(error.message);
    } );
    return () => controller.abort();
}, []);
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <h1>Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
