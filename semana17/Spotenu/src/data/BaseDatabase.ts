import knex from 'knex'
import Knex from 'knex'

export abstract class BaseDatabase {
  private static CONNECTION: Knex | null = null;

  protected connection(): Knex {
    if (BaseDatabase.CONNECTION === null) {
      BaseDatabase.CONNECTION = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: 3306,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE_NAME
        }
      })
    }
    return BaseDatabase.CONNECTION
  }

  public static async destroyConnection(): Promise<void> {
    if (BaseDatabase.CONNECTION) {
      await BaseDatabase.CONNECTION.destroy();
      BaseDatabase.CONNECTION = null
    }
  }

  protected convertBooleanToTinyint(value: boolean): number {
    return value ? 1 : 0
  }

  protected convertTinyintToBoolean(value: number): boolean {
    return value === 1 ? true : false
  }

}