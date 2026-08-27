# Punkapi PHP SDK Reference

Complete API reference for the Punkapi PHP SDK.


## PunkapiSDK

### Constructor

```php
require_once __DIR__ . '/punkapi_sdk.php';

$client = new PunkapiSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PunkapiSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = PunkapiSDK::test();
```


### Instance Methods

#### `Beer($data = null)`

Create a new `BeerEntity` instance. Pass `null` for no initial data.

#### `Image($data = null)`

Create a new `ImageEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): PunkapiUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## BeerEntity

```php
$beer = $client->Beer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abv` | `float` | No | Alcohol by volume percentage |
| `attenuation_level` | `float` | No | Attenuation level percentage |
| `boil_volume` | `array` | No |  |
| `brewers_tips` | `string` | No | Tips from the brewers |
| `contributed_by` | `string` | No | Contributor information |
| `description` | `string` | No | Detailed description of the beer |
| `ebc` | `float` | No | European Brewery Convention color scale |
| `first_brewed` | `string` | No | Date when the beer was first brewed (format: MM/YYYY or YYYY) |
| `food_pairing` | `array` | No | List of foods that pair well with this beer |
| `ibu` | `float` | No | International Bitterness Units |
| `id` | `int` | No | Unique identifier for the beer |
| `image` | `string` | No | Filename of the beer's image |
| `ingredients` | `array` | No |  |
| `method` | `array` | No |  |
| `name` | `string` | No | Name of the beer |
| `ph` | `float` | No | pH level of the beer |
| `srm` | `float` | No | Standard Reference Method color scale |
| `tagline` | `string` | No | Short tagline or description |
| `target_fg` | `float` | No | Target final gravity |
| `target_og` | `float` | No | Target original gravity |
| `volume` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Beer()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Beer()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BeerEntity`

Create a new `BeerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ImageEntity

```php
$image = $client->Image();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Image()->load(["id" => "image_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ImageEntity`

Create a new `ImageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new PunkapiSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

