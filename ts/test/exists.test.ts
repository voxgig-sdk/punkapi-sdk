
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { PunkapiSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await PunkapiSDK.test()
    equal(null !== testsdk, true)
  })

})
