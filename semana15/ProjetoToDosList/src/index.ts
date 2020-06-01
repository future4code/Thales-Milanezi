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

const TaskList = async (): Promise<any> => {
  await connection.raw(`
 CREATE TABLE task(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  status ENUM("aFazer", "Fazendo", "Feita"),
  description VARCHAR(255) NOT NULL,
  limitDate VARCHAR(255) NOT NULL, 
  creatorUserId varchar(255) NOT NULL,
  FOREIGN KEY (creatorUserId) REFERENCES User(id)
)
`)
}

// const ResponsibleTaskbyIdUser = async (task_id: string, user_responsible: string): Promise<any> => {
//   await connection.raw(`
//   CREATE TABLE task(
//     task_id VARCHAR(255),
//     user_responsible VARCHAR(255),
//     FOREIGN KEY (task_id) REFERENCES TaskList(id),
//     FOREIGN KEY (user_responsible) REFERENCES User(id)
//   `)
// }
TaskList();


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

const updateUser = async (name: string, nickname: string): Promise<void> => {
  await connection
    .update({
      name: name,
      nickname: nickname
    })
    .where(`${name}`)
}

const getUserById = async (id: number): Promise<any> => {
  const result = await connection.select("*").from("User").where({ id })
  return result
}

//Main function aqui 
async function main(): Promise<void> {
  //  TaskList();
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

app.post("/user/edit", async (req: Request, res: Response): Promise<any> => {
  try {
    if (name) {
      await updateUser(req.body.name, req.body.nickname)
      res.sendStatus(200)
    } else {
      console.log("Erro ao tentar atualizar o usuário, preencha todos os campos e tente novamente")
    }
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

app.put("/task", async (req: Request, res: Response) => {
  try {
    const title = req.body.title
    const status = req.body.status
    const description = req.body.description
    const limitDate = req.body.limitDate
    const creatorUserId = req.body.creatorUserId

    console.log("title:", title)
    console.log("status:", status)
    console.log("description:", description)
    console.log("limitDate:", limitDate)
    console.log("creatorUserId:", creatorUserId)

    TaskList()

    res.status(200).send()
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