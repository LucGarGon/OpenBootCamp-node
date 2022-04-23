import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port: string | number = process.env.PORT || 8000

app.get('/', (req: Request, res: Response) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`express en funcionamiento en http://localhost:${port}`)
})
