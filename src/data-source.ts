import "reflect-metadata";
import { DataSource } from "typeorm";
import { User, Category, Project, Score } from "./entities";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER, // usuario de postgres, es postgres por defecto
  password: process.env.DB_PASSWORD, // password de postgres
  database: process.env.DB_NAME, // database name
  synchronize: true,
  logging: false,
  entities: [User, Category, Project],
  migrations: ["src/migration/*{.ts,.js}"],
  migrationsTableName: "custom_migration_table",
  subscribers: [],
});

// Despu+es usar AppDataSource como manejador de info de las tablas
// const savedPhotos = await AppDataSource.manager.find(Photo)
