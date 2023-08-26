import { useEffect, useState } from "react";
import apiClient from "../services/ApiClient";
import { Axios, AxiosRequestConfig, CanceledError } from "axios";
import { AnyArray } from "immer/dist/internal";

export interface IFetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: AnyArray) => {

  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<IFetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, deps ? [...deps] : []);
  return { data, error, loading };
};

export default useData;
