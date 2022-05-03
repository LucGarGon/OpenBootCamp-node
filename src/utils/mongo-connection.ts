import { DataSource } from 'typeorm'

export const mongoSource = new DataSource({
  type: 'mongodb',
  host: 'localhost',
  port: 27001
})
