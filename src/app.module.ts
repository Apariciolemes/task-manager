import { Module } from '@nestjs/common';
import { dbRoot } from './db/config';
import { UserModule } from './modules/users/user.module';
import { TasksModule } from './modules/tasks/tasks.module';
@Module({
  imports: [dbRoot, UserModule, TasksModule],
})
export class AppModule {}
