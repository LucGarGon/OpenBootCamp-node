import dotenv from 'dotenv'

import server from '@app/server'
import { Log } from '@app/utils/logger-winston'

dotenv.config()
const port = process.env.PORT || 8000

server.listen(port, () => {
  Log.info(`[SERVER ON]: running in http://localhost:${port}/api`)
})

server.on('error', (error) => {
  Log.error(`[SERVER ERROR]: ${error}`)
})
