import knex from 'knex'
import dotenv from 'dotenv'
import express, { Request, Response } from "express"
import { AddressInfo } from 'net';
dotenv.config();


const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME
  }
})

const createUser = async (name: string, nickname: string, email: string): Promise<void> => {
  await connection.raw(`
  INSERT INTO User (name, nickname, email)
  VALUES(
  "${name}",
  "${nickname}",
  "${email}"
  )
  `)
  console.log("Usuario criado com sucesso, com o nome", name)
}

async function main(): Promise<void> {
//  createUser("julia", "julinha", "juju92@gmail.com")
}

const getUserById = async (id: number): Promise<any> =>{
  const result = await connection.select("*").from("User").where({id}) 
  return result
}

//express a partir daqui
const app = express()
app.use(express.json());


app.put("/user", async (req: Request, res: Response) => {
  try {
    const name = req.body.name
    const nickname = req.body.nickname
    const email = req.body.email

    console.log("nome:", name)
    console.log("nickname:", nickname)
    console.log("email:", email)

    createUser(name, nickname, email)

    res.status(200).send()
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})
// perguntar depois sobre esse as unknown as number pra future4
app.get("/user/:id", async (req: Request, res: Response): Promise<any> => {
  try {
    const result = await getUserById(req.params.id as unknown as number)
    res.status(200).send({
      user: result[0]
    })
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})


//servidor aqui
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  }
  else {
    console.error(`Failure upon starting server.`);
  }
});