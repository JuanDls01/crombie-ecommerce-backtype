import "reflect-metadata";
import { DataSource } from "typeorm";
import { User, Category, Project, Score } from "./entities";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "ecommerce-db.cbdusjiaiu1j.us-east-1.rds.amazonaws.com",
  port: 5432,
  username: "postgres", // usuario de postgres, es postgres por defecto
  password: "crombiepassword", // password de postgres
  database: "ecommerce-db", // database name
  synchronize: true,
  logging: false,
  entities: [User, Category, Project],
  migrations: ["src/migration/*{.ts,.js}"],
  migrationsTableName: "custom_migration_table",
  subscribers: [],
});

// Despu+es usar AppDataSource como manejador de info de las tablas
// const savedPhotos = await AppDataSource.manager.find(Photo)
