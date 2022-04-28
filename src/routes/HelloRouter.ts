import { HelloControllerImpl } from '@/controller/HelloController'
import { HelloController } from '@/controller/interfaces'
import express, { Request, Response } from 'express'

import { LogInfo } from '../utils/logger'

export const helloRouter = express.Router()
helloRouter.route('/')
  .get(async (req: Request, res: Response) => {
    const name: any = req?.query?.name
    LogInfo(`Query params: ${name}`)
    const controller: HelloController = new HelloControllerImpl()
    const response = await controller.getMessage(name)
    return res.send(response)
  })
