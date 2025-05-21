import ApiClient from "./Api-Client";

export interface User {
  id: number;
  name: string;
}

class UserService {
  getAllUsers() {
    const controller = new AbortController();
    const request = ApiClient.get<User[]>("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  deleteUser(id: number) {
    return ApiClient.delete("/users/" + id);
  }

  createUser(user: User) {
    return ApiClient.post("/users" + user);
  }

  updateUser(user: User) {
    return ApiClient.patch("/users/" + user.id, user);
  }
}
export default new UserService();
