import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
config();

export const dbRoot = TypeOrmModule.forRoot({
  type: process.env.DB_TYPE as 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
