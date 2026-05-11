import { DataSource } from "typeorm";
import { Patients, Users } from "./entities";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USERNAME,
  database: process.env.DB_DATABASE,
  entities: [Users, Patients],
  synchronize: true,
});
