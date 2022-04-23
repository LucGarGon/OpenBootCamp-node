import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port: string | number = process.env.PORT || 8000

app.get('/hello', (req: Request, res: Response) => {
  const resp: any = req.query.name ? req.query.name : 'anónimo'
  const message:string = `Hola, ${resp}`
  res.status(200).json({ data: { message } })
})
app.get('/goodbye', (req:Request, res: Response) => {
  const message:string = 'Goodbye, world'
  res.status(200).json({ data: { message } })
})

app.listen(port, () => {
  console.log(`express en funcionamiento en http://localhost:${port}`)
})
