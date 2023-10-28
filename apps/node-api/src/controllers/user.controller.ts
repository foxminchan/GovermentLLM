import { UserService } from '../modules';
import { ApiController, SwaggerResponse } from '../libs/decorators';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, ResponseUserDto, UpdateUserDto } from '../core';

@ApiController('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @SwaggerResponse({
    operation: 'User fetch',
    response: ResponseUserDto,
  })
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':page/:limit')
  @SwaggerResponse({
    operation: 'User fetch with pagination',
    params: ['page', 'limit'],
    response: ResponseUserDto,
  })
  getPaginatedUsers(
    @Param('page') page: number,
    @Param('limit') limit: number
  ) {
    return this.userService.getPaginatedUsers(page, limit);
  }

  @Get(':id')
  @SwaggerResponse({
    operation: 'User fetch by id',
    params: ['id'],
    response: ResponseUserDto,
  })
  getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Post()
  @SwaggerResponse({
    operation: 'Create user',
    body: CreateUserDto,
  })
  addUser(@Body() user: CreateUserDto) {
    return this.userService.addUser(user);
  }

  @Put(':id')
  @SwaggerResponse({
    operation: 'Update user',
    params: ['id'],
    body: UpdateUserDto,
  })
  updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  @SwaggerResponse({
    operation: 'Delete user',
    params: ['id'],
  })
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
