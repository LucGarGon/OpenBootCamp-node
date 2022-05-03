import { BasicResponse } from './types'
import { GreetingsController } from './interfaces/index'
import { Log } from '@app/utils/logger-winston'
import { Get, Route, Tags } from 'tsoa'

@Route('/api/hello')
@Tags('HelloController')
export class HelloControllerImpl implements GreetingsController {
  @Get('/')
  public async getMessage (name?: string): Promise<BasicResponse> {
    Log.info('[/api/hello] Get Request')

    return {
      message: `Hello ${name || 'world!'}`
    }
  }
}
