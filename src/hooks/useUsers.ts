import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import apiClient, { CanceledError, AxiosError } from "../services/api-client";

const useUsers = () => {
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

    return { data, error, loading, setData, setError, setLoading };
}

export default useUsers;