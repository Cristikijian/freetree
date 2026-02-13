import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Post as PostType } from 'generated/prisma/client';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Post()
  async createPost(@Body() data): Promise<PostType | null> {
    return this.postsService.create(data);
  }

  @Get()
  async getPosts() {
    return this.postsService.findAll();
  }

  @Patch()
  async updatePost(@Body() data): Promise<PostType | null> {
    return this.postsService.update(data);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }
}
