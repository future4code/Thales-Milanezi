import express from "express";
import {AddressInfo} from "net";
import dotenv from 'dotenv'
import { usersRouter } from "./router/UsersRouter";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/", usersRouter)

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});