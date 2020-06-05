import { Authenticator } from "../services/Authenticator";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { BandDatabase } from "../data/BandDatabase";
import { Band } from "../model/Band";

export class BandBusiness{
  constructor(
    private bandDataBase: BandDatabase,
    private authenticator: Authenticator,
    private hashGenerator: HashGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async bandSignup(
    name: string,
    nickname: string,
    description: string,
    email: string,
    password: string,
  ){
    const id = this.idGenerator.generate();
    const hashPassword = await this.hashGenerator.hash(password)

    await this.bandDataBase.createBandUser(
      new Band(
        id,
        name,
        email,
        nickname,
        description,
        hashPassword
      ))

      const acessToken = this.authenticator.generateToken({id})
      return { acessToken}
  }
}