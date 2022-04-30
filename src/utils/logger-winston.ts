
import dotenv from 'dotenv'
import { config, createLogger, format, transports } from 'winston'

dotenv.config()
// const logger = winston.createLogger({
//   level: process.env.LEVEL || 'info',
//   format: winston.
// })
//     winston.createLogger()

const logger = createLogger({
  levels: config.syslog.levels,
  level: process.env.LEVEL || 'info',
  format: format.json(),
  transports: [new transports.Console()]
})

export class Log {
  static info = (log:string) => logger.info(log)
  static error = (log:string) => logger.error(log)
  static warn = (log:string) => logger.warn(log)
}
