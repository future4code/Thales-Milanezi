#### Exercício 1
a) round é o numero de vezes em que o blowfish vai criptografar a mesma senha o numero mínimo e 12 vezes
O salt por sua vez é a string que o blowfish vai criar para poder inseria-la na senha que foi inserida pelo usuário e ai depois a senha com essa string aleatório ela será criptografada.

b) npm i bcryptjs @types/bcryptjs
```
export class HashManager{
  public async hash(bananinha: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash("lalalal", salt)
    return result;
  }
```
c) 
```
public async compare(bananinha: string, hash: string): Promise<boolean>{
    return bcrypt.compare(bananinha, hash)
  }
}
```
#### Exercício 2
a) Eu alteraria o cadastro primeiramente porque assim tudo que fosse cadastrado a partir daquele momento já estaria no formato correto criptografado, enquanto se eu altero o login primeiro a pessoa ja ésta cadastrada no banco sem a cryptogrfia então precisaria realizar ess troca de usuário com login dados salvos normalmente para um criptografado.

b)nesse endpoint foi interceptado o userData password para poder ser cryptografado antes de ser criado um novo usuário, quando é criado o novo usuario ao inves do pegar a informação do boyd.password ele pega o hashPassword que foi cryptografado pelo hashManager
```
 const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(userData.password)

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, hashPassword);
```
c) Nesse caso do login foi necessário utilizar o hashManager para que ele compare as senhas a senha que esta no body e a senha cadastrada, ou seja, se a senha cadastrada é igual a senha que foi colocada no login então ele devolve true senão ele joga um erro de senha invalida.
```
const hashManager = new HashManager();
    const compareResult = await hashManager.compare(
      userData.password, user.password
    )

    if (!compareResult) {
      throw new Error("Invalid password");
    }
```

d) Acredito que não porque essa para saber se o usuário é ele mesmo é necessa´rio que ele tenha feito login e no login é que foi feita a verificação da senha que o usuario colocou no momento do login com a senha cadastrada no banco de dados e adicionar uma verificação a mais nesse ponto pode ser repetição desnecessária de código.

#### Exercício 3
a) Fiz no workbench diretamente
```
ALTER TABLE usersNewTable 
ADD COLUMN role VARCHAR(255) DEFAULT "normal";
```
B, C, D => tudo feito no código

#### Exercício 4
a)
```
if(authenticationData.role != "admin"){
      throw new Error("Unauthorized")
    }
```

#### Exercício 5
```
export const deleteEndPoint = async (req: Request, res: Response) => {
  try{
    const token = req.headers.authorization as string
    const authenticator = new Authenticator()
    const tokenData = authenticator.getData(token)

    if(tokenData.role !== "admin"){
      throw new Error("unauthorized")
    }

    const userDatabase = new UserDatabase()
    userDatabase.deleteUser(req.params.id)

    res.sendStatus(200)
  }catch(err){
res.status(400).send({
  message: err.message
})
  }
};
```
#### Exercício 6
```
export const getUserByIdEnpoint = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string
    const authenticator = new Authenticator()
    authenticator.getData(token)
    const userId = req.params.idGenerator

    const userDatabase = new UserDatabase()
    const user = await userDatabase.getUserById(userId)

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role
    })
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
};
```











