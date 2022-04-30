import express, { Request, Response } from 'express'
import { GreetingsController } from '../controller/interfaces/index'
import { GoodbyeControllerImpl } from '../controller/GoodbyeController'
import { Log } from '../utils/logger-winston'

export const goodbyeRouter = express.Router()
goodbyeRouter.route('/')
  .get(async (req: Request, res: Response) => {
    const nombre: any = req?.query?.name
    Log.info(`Query params: ${nombre}`)
    const controller: GreetingsController = new GoodbyeControllerImpl()
    const response = await controller.getMessage(nombre)
    return res.send(response)
  })
