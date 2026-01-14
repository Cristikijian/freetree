import { User } from 'generated/prisma/client';
import { UsersService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UsersService);
    findAll(): [];
    getCurrentUser(): Promise<User | null>;
    getUserById(id: number): Promise<User | null>;
}
