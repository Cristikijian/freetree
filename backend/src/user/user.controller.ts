import { Controller, Get, Param } from '@nestjs/common';
import { User } from 'generated/prisma/client';
import { UsersService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  findAll(): [] {
    return [];
  }

  @Get('/current')
  async getCurrentUser(): Promise<User | null> {
    return this.userService.getById(1);
  }

  @Get('/:id')
  async getUserById(@Param('id') id: number): Promise<User | null> {
    return this.userService.getById(id);
  }
}
