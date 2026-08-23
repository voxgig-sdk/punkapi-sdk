# Punkapi TypeScript SDK



The TypeScript SDK for the Punkapi API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Beer()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/punkapi-sdk/releases](https://github.com/voxgig-sdk/punkapi-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { PunkapiSDK } from '@voxgig-sdk/punkapi'

const client = new PunkapiSDK()
```

### 2. List beer records

`list()` resolves to an array of Beer ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const beers = await client.Beer().list()

for (const beer of beers) {
  console.log(beer)
}
```

### 3. Load a beer

`load()` returns the entity directly and throws on failure:

```ts
try {
  const beer = await client.Beer().load({ id: 1 })
  console.log(beer)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const beers = await client.Beer().list()
  console.log(beers)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = PunkapiSDK.test()

const beer = await client.Beer().list()
// beer is the entity, populated with mock response data
// — call beer.data() for the record itself
console.log(beer)
```

You can also use the instance method:

```ts
const client = new PunkapiSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Beer()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new PunkapiSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
PUNKAPI_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### PunkapiSDK

#### Constructor

```ts
new PunkapiSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Beer(data?)` | `BeerEntity` | Create a Beer entity instance. |
| `Image(data?)` | `ImageEntity` | Create an Image entity instance. |
| `tester(testopts?, sdkopts?)` | `PunkapiSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `PunkapiSDK.test(testopts?, sdkopts?)` | `PunkapiSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): PunkapiSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` resolves to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Beer

| Field | Description |
| --- | --- |
| `abv` | Alcohol by volume percentage |
| `attenuation_level` | Attenuation level percentage |
| `boil_volume` |  |
| `brewers_tips` | Tips from the brewers |
| `contributed_by` | Contributor information |
| `description` | Detailed description of the beer |
| `ebc` | European Brewery Convention color scale |
| `first_brewed` | Date when the beer was first brewed (format: MM/YYYY or YYYY) |
| `food_pairing` | List of foods that pair well with this beer |
| `ibu` | International Bitterness Units |
| `id` | Unique identifier for the beer |
| `image` | Filename of the beer's image |
| `ingredients` |  |
| `method` |  |
| `name` | Name of the beer |
| `ph` | pH level of the beer |
| `srm` | Standard Reference Method color scale |
| `tagline` | Short tagline or description |
| `target_fg` | Target final gravity |
| `target_og` | Target original gravity |
| `volume` |  |

Operations: list, load.

API path: `/beers`

#### Image

| Field | Description |
| --- | --- |

Operations: load.

API path: `/images/{filename}`



## Entities


### Beer

Create an instance: `const beer = client.Beer()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abv` | `number` | Alcohol by volume percentage |
| `attenuation_level` | `number` | Attenuation level percentage |
| `boil_volume` | `Record<string, any>` |  |
| `brewers_tips` | `string` | Tips from the brewers |
| `contributed_by` | `string` | Contributor information |
| `description` | `string` | Detailed description of the beer |
| `ebc` | `number` | European Brewery Convention color scale |
| `first_brewed` | `string` | Date when the beer was first brewed (format: MM/YYYY or YYYY) |
| `food_pairing` | `any[]` | List of foods that pair well with this beer |
| `ibu` | `number` | International Bitterness Units |
| `id` | `number` | Unique identifier for the beer |
| `image` | `string` | Filename of the beer's image |
| `ingredients` | `Record<string, any>` |  |
| `method` | `Record<string, any>` |  |
| `name` | `string` | Name of the beer |
| `ph` | `number` | pH level of the beer |
| `srm` | `number` | Standard Reference Method color scale |
| `tagline` | `string` | Short tagline or description |
| `target_fg` | `number` | Target final gravity |
| `target_og` | `number` | Target original gravity |
| `volume` | `Record<string, any>` |  |

#### Example: Load

```ts
const beer = await client.Beer().load({ id: 1 })
```

#### Example: List

```ts
const beers = await client.Beer().list()
```


### Image

Create an instance: `const image = client.Image()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const image = await client.Image().load({ id: 'image_id' })
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
punkapi/
├── src/
│   ├── PunkapiSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { PunkapiSDK } from '@voxgig-sdk/punkapi'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const beer = client.Beer()
await beer.list()

// beer.data() now returns the beer data from the last `list`
// beer.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
