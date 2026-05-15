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
| `$options["apikey"]` | `string` | API key for authentication. |
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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

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

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## BeerEntity

```php
$beer = $client->Beer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abv` | ``$NUMBER`` | No |  |
| `attenuation_level` | ``$NUMBER`` | No |  |
| `boil_volume` | ``$OBJECT`` | No |  |
| `brewers_tip` | ``$STRING`` | No |  |
| `contributed_by` | ``$STRING`` | No |  |
| `description` | ``$STRING`` | No |  |
| `ebc` | ``$NUMBER`` | No |  |
| `first_brewed` | ``$STRING`` | No |  |
| `food_pairing` | ``$ARRAY`` | No |  |
| `ibu` | ``$NUMBER`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `image` | ``$STRING`` | No |  |
| `ingredient` | ``$OBJECT`` | No |  |
| `method` | ``$OBJECT`` | No |  |
| `name` | ``$STRING`` | No |  |
| `ph` | ``$NUMBER`` | No |  |
| `srm` | ``$NUMBER`` | No |  |
| `tagline` | ``$STRING`` | No |  |
| `target_fg` | ``$NUMBER`` | No |  |
| `target_og` | ``$NUMBER`` | No |  |
| `volume` | ``$OBJECT`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Beer()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Beer()->load(["id" => "beer_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): BeerEntity`

Create a new `BeerEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## ImageEntity

```php
$image = $client->Image();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Image()->load(["id" => "image_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ImageEntity`

Create a new `ImageEntity` instance with the same client and
options.

#### `getName(): string`

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

