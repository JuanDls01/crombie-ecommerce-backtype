import "reflect-metadata";
import { DataSource } from "typeorm";
import { User, Category, Project } from "./entities";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres", // usuario de postgres, es postgres por defecto
  password: "1234", // password de postgres
  database: "ecommerce-db", // database name
  synchronize: false,
  logging: false,
  entities: [User, Category, Project],
  migrations: ["src/migrations/**/*{.ts,.js}"],
  migrationsTableName: "custom_migration_table",
  subscribers: [],
});

// Despu+es usar AppDataSource como manejador de info de las tablas
// const savedPhotos = await AppDataSource.manager.find(Photo)
