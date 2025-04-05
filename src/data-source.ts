// src/data-source.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";

// Carrega variáveis do .env (apenas para uso fora do NestJS, como em scripts CLI)
config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST, // Usa 127.0.0.1 no WSL
  port: parseInt(process.env.DB_PORT || "3306"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_USERNAME, // Altere para sua senha real
  database: process.env.DB_DATABASE,
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  migrations: [__dirname + "/../migrations/*{.ts,.js}"],
  synchronize: false,
  logging: true,
  migrationsTableName: "migrations", // Garante o nome da tabela de migrations
});