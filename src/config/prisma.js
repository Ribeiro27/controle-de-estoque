import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/index.js';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import mariadb from 'mariadb';

// Cria o pool de conexÃµes para o MySQL/MariaDB
const pool = mariadb.createPool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_DB,
  connectionLimit: 5,
});

// Cria o adaptador exigido pelo Prisma 7
const adapter = new PrismaMariaDb(pool);

// Instancia o Prisma Client
export const prisma = new PrismaClient({ adapter });
