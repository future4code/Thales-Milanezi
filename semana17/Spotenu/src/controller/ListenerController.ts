import { Request, Response } from 'express'
import { ListenerBusiness } from "../business/ListenerBusiness";
import { ListenerDatabase } from "../data/ListenerDatabase";
import { HashGenerator } from "../services/hashGenerator";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";
import { BaseDatabase } from '../data/BaseDatabase';

export class ListenerController {
  private static listenerBusiness = new ListenerBusiness(
    new ListenerDatabase(),
    new Authenticator(),
    new HashGenerator(),
    new IdGenerator()
  )

  async ListenerSignup(req: Request, res: Response) {
    try {
      const result = await ListenerController.listenerBusiness.listenerSignup(
        req.body.name,
        req.body.email,
        req.body.nickname,
        req.body.password,
        req.body.role
      );
      res.status(200).send(result)
    } catch (err) {
      res.status(err.errorCode || 400).send({
        message: err.message
      })
    }
    await BaseDatabase.destroyConnection()
  }
}