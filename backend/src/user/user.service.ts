import { Injectable } from '@nestjs/common';
import { User } from 'generated/prisma/client';
import { UserWhereInput } from 'generated/prisma/models';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async find(options: UserWhereInput): Promise<User | null> {
    return this.prisma.user.findFirst({ where: options });
  }
}
