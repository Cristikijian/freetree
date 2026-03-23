import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Post as PostType } from 'generated/prisma/client';
import type { PostCreateInput } from 'generated/prisma/models';
import { UsersService } from 'src/user/user.service';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly usersService: UsersService,
  ) {}
  @Post()
  async createPost(@Body() data: PostCreateInput): Promise<PostType | null> {
    return this.postsService.create(data);
  }

  @Get(':username')
  async getPosts(@Param('username') userName: string) {
    if (!userName) {
      return this.postsService.findAll();
    } else {
      const user = await this.usersService.find({
        username: { mode: 'insensitive', equals: userName },
      });
      if (!user) {
        throw new NotFoundException('Something bad happened', {
          cause: new Error(),
          description: 'User not found',
        });
      }
      return this.postsService.findByUserId(user.id);
    }
  }

  @Patch()
  async updatePost(
    @Body() data: Record<string, any>,
  ): Promise<PostType | null> {
    return this.postsService.update(data);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }
}
