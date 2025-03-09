import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksService } from './tasks.service';
import { TasksController } from 'src/modules/tasks/tasks.controller';
import { TasksEntity } from 'src/modules/tasks/tasks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TasksEntity])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
