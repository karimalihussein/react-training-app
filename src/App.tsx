import { useEffect, useState } from "react";
import axios from "axios";

interface User {
    id: number;
    name: string;
}


function App() {
    const [data, setData] = useState<User[]>([]);
    useEffect(() => { axios.get<User[]>("https://jsonplaceholder.typicode.com/users").then((res) => setData(res.data)); }, []);
    return (
        <div>
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
