import { BasicResponse } from './types'
import { HelloController } from './interfaces'
import { LogSuccess } from '@/utils/logger'

export class HelloControllerImpl implements HelloController {
  public async getMessage (name?: string): Promise<BasicResponse> {
    LogSuccess('[/api/hello] Get Request')

    return {
      message: `Hello ${name || 'world!'}`
    }
  }
}
