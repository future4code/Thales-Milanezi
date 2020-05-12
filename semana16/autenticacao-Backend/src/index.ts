import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import knex from 'knex'
import {UserDataBase} from './data/UserDataBase'


dotenv.config();

const userTableName = "User";

async function usersTable(): Promise<void>{
  await connection.raw(`
  CREATE TABLE usersNewTable(
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  )
  `)
  console.log("deu certo !")
}
usersTable();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
