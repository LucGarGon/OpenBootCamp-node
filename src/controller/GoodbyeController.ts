import { GreetingsController } from './interfaces/index'
import { BasicResponse } from './types/index'
import { Log } from '../utils/logger-winston'

export class GoodbyeControllerImpl implements GreetingsController {
  public async getMessage (name?: string | undefined): Promise<BasicResponse> {
    Log.info('[api/hello] Get request')

    return {
      message: `Goorbye ${name || 'world'}`,
      data: new Date().toTimeString()
    }
  }
}
