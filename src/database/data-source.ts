import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  migrations: [__dirname + '/../database/migrations/*.{ts,js}'],
  migrationsRun: false,
  logging: true,
});

export default AppDataSource;
