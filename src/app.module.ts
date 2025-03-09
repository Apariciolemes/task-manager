import { Module } from '@nestjs/common';
import { dbRoot } from './database/root-config';
import { TasksModule } from './modules/tasks/tasks.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [dbRoot, UserModule, TasksModule],
})
export class AppModule {}
