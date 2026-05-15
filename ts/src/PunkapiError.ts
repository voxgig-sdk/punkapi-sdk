
import { Context } from './Context'


class PunkapiError extends Error {

  isPunkapiError = true

  sdk = 'Punkapi'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  PunkapiError
}

