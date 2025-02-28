import { Module } from '@nestjs/common';
import { dbRoot } from './db/config';
import { UserModule } from './modules/users/user.module';
@Module({
  imports: [dbRoot, UserModule],
})
export class AppModule {}
