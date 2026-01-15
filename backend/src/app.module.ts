import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { PrismaService } from './prisma.service';
import { UserController } from './user/user.controller';
import { UsersService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, PostsController],
  providers: [AppService, PrismaService, UsersService],
})
export class AppModule {}
