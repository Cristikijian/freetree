export type User = {
  id: number | null;
  email: string | null;
  username: string | null;
  createdAt: Date | null;
};

export type Post = {
  id?: number | null;
  authorId: number | null;
  createdAt?: Date | null;
  content: string | null;
  title: string | null;
};
