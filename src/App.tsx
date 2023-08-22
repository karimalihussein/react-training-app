import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [data, setData] = useState<User[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  // get -> promise -> then -> catch
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
    .then((res) => {setData(res.data); setLoading(false); })
    .catch((error) => {
        if(error instanceof CanceledError) return;
        if(error instanceof AxiosError) setError(error.message);
        setLoading(false);
    });
    return () => controller.abort();
}, []);
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {loading &&  <div className="spinner-border">
        <span className="visually-hidden">Loading...</span>
      </div> }
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
