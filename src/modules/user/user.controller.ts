import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/typeorm/models/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Endpoint to get user by ID
  @Get(':id')
  async findUserById(@Param('id') id: string): Promise<User | undefined> {
    return this.userService.findById(+id);
  }
}
