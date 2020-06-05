import { AdminBusiness } from "../business/AdminBusiness";
import { AdminDatabase } from "../data/AdminDatabase";
import { HashGenerator } from "../services/hashGenerator";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";
import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";

export class AdminController {
  private static adminBusiness = new AdminBusiness(
    new AdminDatabase(),
    new HashGenerator() as any,
    new Authenticator() as any,
    new IdGenerator()
  )

  async AdminSignup(req: Request, res: Response) {
    try {
      const result = await AdminController.adminBusiness.adminSignup(
        req.body.name,
        req.body.email,
        req.body.nickname,
        req.body.password
      )
      res.status(200).send(result)

    } catch (err) {
      res.status(err.codeError || 400).send({
        message: err.message
      })
    }
    await BaseDatabase.destroyConnection()
  }
}