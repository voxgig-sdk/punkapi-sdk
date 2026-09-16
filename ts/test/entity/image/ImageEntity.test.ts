

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { PunkapiSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ImageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PUNKAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('PUNKAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PunkapiSDK.test()
    const ent = testsdk.Image()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PUNKAPI_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'image.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"image","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"366.png","kind":"param","name":"id","orig":"filename","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /images/{filename}","json":"{\"operationId\":\"getBeerImage\",\"parameters\":[{\"description\":\"Image filename (from the beer's image field)\",\"in\":\"path\",\"name\":\"filename\",\"required\":true,\"schema\":{\"example\":\"366.png\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"image/png\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Image not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/images/{filename}","rename":{"param":{"filename":"id"}},"segments":[{"lit":"images"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"image","name__orig":"image","Name":"Image","name_":"image","name-":"image","NAME":"IMAGE","index$":1}, {"active":true,"entity":"image","key$":"BasicImageFlow","kind":"basic","name":"BasicImageFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"image_ref01","srcdatavar":"image_ref01_data","suffix":"_dt0"},"match":{"id":"image01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-image_ref01"}}],"index$":0}]}, 'Image')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let image_ref01_data = Object.values(setup.data.existing.image)[0] as any

    // LOAD
    const image_ref01_ent = client.Image()
    const image_ref01_match_dt0: any = {}
    image_ref01_match_dt0.id = image_ref01_data.id
    const image_ref01_data_dt0 = (await image_ref01_ent.load(image_ref01_match_dt0)).data()
    assert(image_ref01_data_dt0.id === image_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/image/ImageTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = PunkapiSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['image01','image02','image03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PUNKAPI_TEST_IMAGE_ENTID': idmap,
    'PUNKAPI_TEST_LIVE': 'FALSE',
    'PUNKAPI_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['PUNKAPI_TEST_IMAGE_ENTID']

  const live = 'TRUE' === env.PUNKAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PUNKAPI_TEST_IMAGE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new PunkapiSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.PUNKAPI_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
