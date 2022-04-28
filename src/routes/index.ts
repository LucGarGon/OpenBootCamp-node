import express, { Request, Response } from 'express'
import { helloRouter } from './HelloRouter'
const server = express()

const rootRouter = express.Router()

rootRouter.get('/', (req: Request, res: Response) => {
  LogInfo('Get: ')
  res.send('welcome')
})

server.use('/', rootRouter)
server.use('/hello', helloRouter)

export default server
