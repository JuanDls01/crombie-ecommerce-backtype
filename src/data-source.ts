import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "ecommerce-db",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})
