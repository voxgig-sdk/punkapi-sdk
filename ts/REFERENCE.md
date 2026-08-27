# Punkapi TypeScript SDK Reference

Complete API reference for the Punkapi TypeScript SDK.


## PunkapiSDK

### Constructor

```ts
new PunkapiSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PunkapiSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = PunkapiSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `PunkapiSDK` instance in test mode.


### Instance Methods

#### `Beer(data?: object)`

Create a new `Beer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BeerEntity` instance.

#### `Image(data?: object)`

Create a new `Image` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImageEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `PunkapiSDK.test()`.

**Returns:** `PunkapiSDK` instance in test mode.


---

## BeerEntity

```ts
const beer = client.Beer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abv` | `number` | No | Alcohol by volume percentage |
| `attenuation_level` | `number` | No | Attenuation level percentage |
| `boil_volume` | `Record<string, any>` | No |  |
| `brewers_tips` | `string` | No | Tips from the brewers |
| `contributed_by` | `string` | No | Contributor information |
| `description` | `string` | No | Detailed description of the beer |
| `ebc` | `number` | No | European Brewery Convention color scale |
| `first_brewed` | `string` | No | Date when the beer was first brewed (format: MM/YYYY or YYYY) |
| `food_pairing` | `any[]` | No | List of foods that pair well with this beer |
| `ibu` | `number` | No | International Bitterness Units |
| `id` | `number` | No | Unique identifier for the beer |
| `image` | `string` | No | Filename of the beer's image |
| `ingredients` | `Record<string, any>` | No |  |
| `method` | `Record<string, any>` | No |  |
| `name` | `string` | No | Name of the beer |
| `ph` | `number` | No | pH level of the beer |
| `srm` | `number` | No | Standard Reference Method color scale |
| `tagline` | `string` | No | Short tagline or description |
| `target_fg` | `number` | No | Target final gravity |
| `target_og` | `number` | No | Target original gravity |
| `volume` | `Record<string, any>` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `random` | `/beers/random` | `client.Beer().list({ $action: 'random', ... })` |

An action returns that action's OWN response, which is not necessarily a
Beer record — check the API definition for its shape.

```ts
const result = await client.Beer().list({
  $action: 'random',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Beer().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Beer().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BeerEntity` instance with the same client and
options.

#### `client()`

Return the parent `PunkapiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImageEntity

```ts
const image = client.Image()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Image().load({ id: 'image_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImageEntity` instance with the same client and
options.

#### `client()`

Return the parent `PunkapiSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new PunkapiSDK({
  feature: {
    test: { active: true },
  }
})
```

