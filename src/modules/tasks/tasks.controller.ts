import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksEntity } from './tasks.entity';
import { TaskStatus } from 'src/enums/tasks';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(
    @Body()
    body: {
      title: string;
      description: string;
      status: TaskStatus;
      user_id: number;
    },
  ): Promise<TasksEntity> {
    return this.tasksService.create(body);
  }

  @Get()
  async findAll(): Promise<TasksEntity[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tasksService.findOne(Number(id));
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tasksService.delete(Number(id));
  }
}
