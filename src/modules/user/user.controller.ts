import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { UserEntity } from './user.entity';
import { UserRequestDTO } from './interfaces';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(
    @Body()
    body: UserRequestDTO,
  ): Promise<UserEntity> {
    return this.userService.create(body);
  }

  @Get()
  async findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(Number(id));
  }
}
