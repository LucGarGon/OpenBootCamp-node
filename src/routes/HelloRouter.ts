import { HelloControllerImpl } from '@app/controller/HelloController'
import { Log } from '@app/utils/logger-winston'
import express, { Request, Response } from 'express'
import { GreetingsController } from '../controller/interfaces/index'

export const helloRouter = express.Router()
helloRouter.route('/')
  .get(async (req: Request, res: Response) => {
    const name: any = req?.query?.name
    Log.info(`Query params: ${name}`)
    const controller: GreetingsController = new HelloControllerImpl()
    const response = await controller.getMessage(name)
    return res.send(response)
  })
