import { LoginDatabase } from "../data/LoginDatabase";
import { HashGenerator } from "../services/hashGenerator";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";

export class LoginBusiness{
  constructor(
    private loginBaseDatabase: LoginDatabase,
    private authenticator: Authenticator,
    private hashGenerator: HashGenerator,
    private idGenerator: IdGenerator
  ){}

  public async login(
    email: string,
    nickname: string,
    password:string
  ){
    const user = await this.loginBaseDatabase.login(
      email,
      nickname,
      password
    )

  }

}