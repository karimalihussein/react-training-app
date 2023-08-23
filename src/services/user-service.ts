import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

class UserService {
  index() {
    const controller = new AbortController();
    const signal = controller.signal;
    const request = apiClient.get<User[]>("/users", { signal });
    return { request, cancel: () => controller.abort() };
  }

  delete(id: number) {
    return apiClient.delete(`/users/${id}`);
  }

  store(user: User) {
    return apiClient.post<User>("/users", user);
  }

  update(user: User) {
    return apiClient.put<User>(`/users/${user.id}`, user);
  }
}

export default new UserService();
