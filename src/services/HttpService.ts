import apiClient from "./api-client";

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  index<T>() {
    const controller = new AbortController();
    const signal = controller.signal;
    const request = apiClient.get<T[]>(this.endpoint, { signal });
    return { request, cancel: () => controller.abort() };
  }

  delete<T>(id: number) {
    return apiClient.delete(`${this.endpoint}/${id}`);
  }

  store<T>(data: T) {
    return apiClient.post<T>(this.endpoint, data);
  }

  update<T extends Entity>(entity: T) {
    return apiClient.put<T>(`${this.endpoint}/${entity.id}`, entity);
  }
}

const httpService = (endpoint: string) => new HttpService(endpoint);

export default httpService;
