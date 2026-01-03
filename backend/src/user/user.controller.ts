import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  find(): string {
    return 'This action returns user';
  }
}
