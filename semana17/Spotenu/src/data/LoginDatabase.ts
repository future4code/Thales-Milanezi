import { BaseDatabase } from "./BaseDatabase";

export class LoginDatabase  extends BaseDatabase{
  private static TABLE_NAME1: string = "AdminSpotenu"
  private static TABLE_NAME2: string = "ListenerSpotenu"
  private static TABLE_NAME3: string = "BandSpotenu"

  public async login(email: string, nickname: string, password:string){
    await this.connection()
   .select("*")
   .from(LoginDatabase.TABLE_NAME1)
   .where(email)
   .union([
    this.connection().select("*")
    .from(LoginDatabase.TABLE_NAME2)
    .where(email)
   ]).union([
    this.connection().select("*")
    .from(LoginDatabase.TABLE_NAME3)
    .where(email)
   ])
  }
}