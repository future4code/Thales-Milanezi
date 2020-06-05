import { BaseDatabase } from "./BaseDatabase";
import { Admin } from "../model/Admin";

export class AdminDatabase extends BaseDatabase {
  private static TABLE_NAME: string = ""

  private toModel(dbResult: any): Admin | undefined {
    return (
      dbResult && new Admin(
        dbResult.id,
        dbResult.name,
        dbResult.email,
        dbResult.nickname,
        dbResult.password
      ))
  }

  public async createAdmin(admin: Admin): Promise<void> {
    await this.connection()
      .insert({
        id: admin.getId(),
        name: admin.getName(),
        email: admin.getEmail(),
        nickname: admin.getNickname(),
        password: admin.getPassword()
      })
      .into(AdminDatabase.TABLE_NAME)
  }

  public async getAdminById(id: string): Promise<Admin | undefined>{
    const result = await this.connection()
    .select("*")
    .from(AdminDatabase.TABLE_NAME)
    .where({id})
    return this.toModel(result[0])
    console.log(result)
  }
}