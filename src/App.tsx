import { useEffect, useState } from "react";
import axios from "axios";

interface User {
    id: number;
    name: string;
}


function App() {
    const [data, setData] = useState<User[]>([]);
    const [error, setError] = useState<string>('');
    useEffect(() => {
        axios.get<User[]>("https://jsonplaceholder.typicode.com/users").then((res) => setData(res.data)).catch(
            (err) => setError(err.message)
        );
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
