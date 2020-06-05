import { AdminDatabase } from "../data/AdminDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { Admin } from "../model/Admin";

export class AdminBusiness {
  constructor(
    private AdminBaseDatabase: AdminDatabase,
    private authenticator: Authenticator,
    private hashGenerator: HashGenerator,
    private idGenerator: IdGenerator
  ) { }

  public async adminSignup(
    name: string,
    email: string,
    nickname: string,
    password: string,
  ) {
    const id = this.idGenerator.generate()
    const hashPassword = await this.hashGenerator.hash(password)

    await this.AdminBaseDatabase.createAdmin(
      new Admin(
        id,
        name,
        email,
        nickname,
        hashPassword
      ))

    const acessToken = this.authenticator.generateToken({
      id
    })
    return { acessToken }
  }
}