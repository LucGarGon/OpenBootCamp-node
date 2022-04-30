import { BasicResponse } from './types'
import { GreetingsController } from './interfaces/index'
import { Log } from '@app/utils/logger-winston'

export class HelloControllerImpl implements GreetingsController {
  public async getMessage (name?: string): Promise<BasicResponse> {
    Log.info('[/api/hello] Get Request')

    return {
      message: `Hello ${name || 'world!'}`
    }
  }
}
