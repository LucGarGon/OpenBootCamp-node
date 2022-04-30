import express, { Request, Response } from 'express'
import { helloRouter } from './HelloRouter'
import { goodbyeRouter } from './GoodbyeRouter'
import { Log } from '@app/utils/logger-winston'
const server = express()

const rootRouter = express.Router()

rootRouter.get('/', (req: Request, res: Response) => {
  Log.info('Get: ')
  res.send('welcome')
})

server.use('/', rootRouter)
server.use('/hello', helloRouter)
server.use('/goodbye', goodbyeRouter)

export default server
