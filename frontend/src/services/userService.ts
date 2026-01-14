import axios, { type AxiosResponse } from "axios";

class UserService {
  async getCurrentUser(): Promise<AxiosResponse | undefined> {
    return axios.get("http://localhost:3000/users/current");
  }
}

const userService = new UserService();

export { UserService, userService };
