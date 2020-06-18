import { BaseDatabase } from "./BaseDatabase";
import { Band } from '../model/Band'

export class BandDatabase extends BaseDatabase {
  private static TABLE_NAME: string = "BandSpotenu"

  private toModel(dbResult: any): Band {
    return (
      dbResult && new Band(
        dbResult.id,
        dbResult.name,
        dbResult.email,
        dbResult.description,
        dbResult.nickname,
        dbResult.password
      ))
  }

  public async createBandUser(band: Band): Promise<void> {
    await this.connection()
      .insert({
        id: band.getId(),
        name: band.getName(),
        email: band.getEmail(),
        nickname: band.getNickname(),
        description: band.getDescription(),
        password: band.getPassword(),
      })
      .into(BandDatabase.TABLE_NAME)
  }

  public async getBandUserById(id: string): Promise<Band | undefined> {
    const result = await this.connection()
      .select("*")
      .from(BandDatabase.TABLE_NAME)
      .where({ id })
    return this.toModel(result[0])
  }
}