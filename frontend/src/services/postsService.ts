import axios, { type AxiosResponse } from "axios";
import type { Post } from "../types";

class PostsService {
  async getPosts(): Promise<AxiosResponse | undefined> {
    return axios.get("http://localhost:3000/posts");
  }

  async createPost(data: Post): Promise<AxiosResponse | undefined> {
    return axios.post("http://localhost:3000/posts", data);
  }

  async updatePost(data: Post): Promise<AxiosResponse | undefined> {
    return axios.patch("http://localhost:3000/posts", data);
  }

  async delete(id: number): Promise<AxiosResponse | undefined> {
    return axios.delete(`http://localhost:3000/posts/${id}`);
  }
}

const postsService = new PostsService();

export { PostsService, postsService };
