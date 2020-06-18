import { BandBusiness } from "../business/BandBusiness";
import { BandDatabase } from "../data/BandDatabase";
import { HashGenerator } from "../services/hashGenerator";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";
import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { AdminDatabase } from "../data/AdminDatabase";

export class BandController {
  private static bandBusiness = new BandBusiness(
    new BandDatabase(),
    new Authenticator(),
    new HashGenerator(),
    new IdGenerator()
  )

  async BandSignup( req: Request, res: Response){
    try{
      const result = await BandController.bandBusiness.bandSignup(
        req.body.name,
        req.body.email,
        req.body.nickname,
        req.body.description,
        req.body.password
      )

      res.status(200).send(result)

    }catch(err){
      res.status(err.errorCode || 400).send({
        message: err.message
      })
    }
    await BaseDatabase.destroyConnection()
  }
}