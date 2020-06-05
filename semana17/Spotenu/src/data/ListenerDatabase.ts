import { BaseDatabase } from "./BaseDatabase";
import { Listener } from "../model/Listener";

export class ListenerDatabase extends BaseDatabase {
  private static TABLE_NAME: string = "ListenerSpotenu"

  private toModel(dbResult: any): Listener | undefined {
    return (
      dbResult && new Listener(
        dbResult.id,
        dbResult.name,
        dbResult.email,
        dbResult.nickname,
        dbResult.password,
        dbResult.role
      ))
  }

  public async createListenerUser(Listener: Listener): Promise<void> {
    await this.connection()
      .insert({
        id: Listener.getId(),
        name: Listener.getName(),
        email: Listener.getEmail(),
        nickname: Listener.getNickname(),
        password: Listener.getPassword(),
        role: Listener.getRole()
      })
      .into(ListenerDatabase.TABLE_NAME)
  }

  public async getListenerUserById(id: string): Promise<Listener | undefined>{
    const result = await this.connection()
    .select("*")
    .from(ListenerDatabase.TABLE_NAME)
    .where({id})
    return this.toModel(result[0])
    console.log(result)
  }
}