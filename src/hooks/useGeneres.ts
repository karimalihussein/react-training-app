import { useEffect, useState } from "react";
import apiClient from "../services/ApiClient";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}

interface FetchGeneresResponse {
  count: number;
  results: Genre[];
}

const useGeneres = () => {
  const [genres, setGeneres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGeneresResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setGeneres(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genres, error, loading };
};

export default useGeneres;
