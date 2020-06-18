import express from 'express'
import { ListenerController } from '../controller/ListenerController'
import { BandController } from '../controller/BandController'
import { AdminController } from '../controller/AdminController'

export const usersRouter = express.Router()
const listenerController = new ListenerController
const bandController = new BandController
const adminController = new AdminController

usersRouter.post("/signup/listener", listenerController.ListenerSignup)
usersRouter.post("/signup/band", bandController.BandSignup)
usersRouter.post("/signup/admin", adminController.AdminSignup)
