import dotenv from 'dotenv'
import { LogError, LogSuccess } from './src/utils/logger'
import server from '@/server'

dotenv.config()

const port = process.env.PORT || 8000

server.listen(port, () => {
  LogSuccess(`[SERVER ON]: running in http://localhost:${port}/api`)
})

server.on('error', (error) => {
  LogError(`[SERVER ERROR]: ${error}`)
})
