import { ListenerDatabase } from "../data/ListenerDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { Listener, stringToListenerRole } from "../model/Listener";

export class ListenerBusiness {
  constructor(
    private listenerDataBase: ListenerDatabase,
    private authenticator: Authenticator,
    private hashGenerator: HashGenerator,
    private idGenerator: IdGenerator
  ) { }

  public async listenerSignup(
     name: string,
     email: string,
     nickname: string,
     password: string,
     role: string
  ){

    const id = this.idGenerator.generate();
    const hashPassword = await this.hashGenerator.hash(password)

    await this.listenerDataBase.createListenerUser( 
      new Listener(
        id, 
        name, 
        email, 
        nickname, 
        hashPassword, 
        stringToListenerRole(role)
        ))

        const acessToken = this.authenticator.generateToken({
          id,
          role
        })
        return {acessToken}
  }
}