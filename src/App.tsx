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
            .then((res) => { setData(res.data); setLoading(false); })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                if (error instanceof AxiosError) setError(error.message);
                setLoading(false);
            });
        return () => controller.abort();
    }, []);
    const handleDelete = (user: User) => {
        const originalData = [...data];
        setData(data.filter((u) => u.id !== user.id));
        axios.delete(`https://jsonplaceholder.typicode.com/xusers/${user.id}`).catch((error) => {
            if (error instanceof CanceledError) return;
            if (error instanceof AxiosError) setError(error.message);
            setData(originalData);
        });
    }
    return (
        <div>
            {error && <p className="text-danger">{error}</p>}
            {loading && <div className="spinner-border">
                <span className="visually-hidden">Loading...</span>
            </div>}
            <h1>Users</h1>
            <ul className="list-group">
                {data.map((user) => (
                    <li className="list-group-item d-flex justify-content-between"  key={user.id}>{user.name} {" "}
                        <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(user)} >Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
