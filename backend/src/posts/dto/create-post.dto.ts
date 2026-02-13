export class CreatePostDto {
  id?: number | undefined;
  authorId: number | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  content: string | undefined;
  title: string | undefined;
}
