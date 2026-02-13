import { Injectable, NotFoundException } from '@nestjs/common';
import { PostCreateInput } from 'generated/prisma/models';
import { PrismaService } from 'src/prisma.service';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}
  create(createPostDto: PostCreateInput) {
    return this.prisma.post.create({ data: createPostDto });
  }

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  async update(data: UpdatePostDto) {
    const id = data.id;
    const post = await this.prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      throw new NotFoundException(`Пост с ID ${id} не найден`);
    }

    return this.prisma.post.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }

  delete(id: number) {
    return this.prisma.post.delete({
      where: {
        id: id,
      },
    });
  }
}
