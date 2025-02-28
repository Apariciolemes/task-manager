import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TasksEntity } from './tasks.entity';
import { TaskStatus } from 'src/enums/tasks';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksEntity)
    private readonly userRepository: Repository<TasksEntity>,
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
    const user = this.userRepository.create({
      title,
      description,
      status,
      user_id,
    });

    return this.userRepository.save(user);
  }

  async findAll(): Promise<TasksEntity[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<TasksEntity | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
