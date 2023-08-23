import { useEffect, useState } from "react";
import apiClient, { CanceledError, AxiosError } from "./components/services/api-client";
import userService, { User } from "./components/services/user-service";

function App() {
    const [data, setData] = useState<User[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
          const { request, cancel } = userService.index();
           request.then((res) => { setData(res.data); setLoading(false); })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                if (error instanceof AxiosError) setError(error.message);
                setLoading(false);
            });
        return () => cancel();
    }, []);
    const handleDelete = (user: User) => {
        const originalData = [...data];
        setData(data.filter((u) => u.id !== user.id));
        userService.delete(user.id).catch((error) => {
            if (error instanceof CanceledError) return;
            if (error instanceof AxiosError) setError(error.message);
            setData(originalData);
        });
    }

    const handleCreate = () => {
        const originalData = [...data];
        const user = { id: 0, name: "test" };
        setData([user, ...data]);
        userService.store(user).then((res) => { const newUser = { ...res.data, id: Math.floor(Math.random() * 1000) }; setData([newUser, ...data]); }).catch((error) => {
            if (error instanceof CanceledError) return;
            if (error instanceof AxiosError) setError(error.message);
            setData(originalData);
        });
    };

    const handleUpdate = (user: User) => {
        const originalData = [...data];
        const index = data.indexOf(user);
        const updatedUser = { ...user, name: "updated" };
        setData([...data.slice(0, index), updatedUser, ...data.slice(index + 1)]);
        userService.update(updatedUser).catch((error) => {
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
            <button className="btn btn-primary mb-3" onClick={handleCreate}>Create</button>
            <h1>Users</h1>
            <ul className="list-group">
                {data.map((user) => (
                    <li className="list-group-item d-flex justify-content-between"  key={user.id}>{user.name} {" "}
                        <div>
                        <button className="btn btn-outline-danger btn-sm mx-1" onClick={() => handleDelete(user)} >Delete</button>
                        <button className="btn btn-outline-primary btn-sm" onClick={() => handleUpdate(user)} >Edit</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
