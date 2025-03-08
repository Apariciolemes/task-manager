import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TasksEntity } from 'src/modules/tasks/tasks.entity';
import { TaskStatus } from './interfaces';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksEntity)
    private readonly tasksRepository: Repository<TasksEntity>,
  ) {}

  async create({
    title,
    description,
    status,
    user_id,
  }: {
    title: string;
    description: string;
    status: TaskStatus;
    user_id: number;
  }): Promise<TasksEntity> {
    const user = this.tasksRepository.create({
      title,
      description,
      status,
      user_id,
    });

    return this.tasksRepository.save(user);
  }

  async findAll(): Promise<TasksEntity[]> {
    return this.tasksRepository.find();
  }

  async findOne(id: number): Promise<TasksEntity | null> {
    return this.tasksRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
