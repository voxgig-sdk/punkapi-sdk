# Punkapi Python SDK Reference

Complete API reference for the Punkapi Python SDK.


## PunkapiSDK

### Constructor

```python
from punkapi_sdk import PunkapiSDK

client = PunkapiSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PunkapiSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = PunkapiSDK.test()
```


### Instance Methods

#### `Beer(data=None)`

Create a new `BeerEntity` instance. Pass `None` for no initial data.

#### `Image(data=None)`

Create a new `ImageEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## BeerEntity

```python
beer = client.Beer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abv` | `float` | No |  |
| `attenuation_level` | `float` | No |  |
| `boil_volume` | `dict` | No |  |
| `brewers_tip` | `str` | No |  |
| `contributed_by` | `str` | No |  |
| `description` | `str` | No |  |
| `ebc` | `float` | No |  |
| `first_brewed` | `str` | No |  |
| `food_pairing` | `list` | No |  |
| `ibu` | `float` | No |  |
| `id` | `int` | No |  |
| `image` | `str` | No |  |
| `ingredient` | `dict` | No |  |
| `method` | `dict` | No |  |
| `name` | `str` | No |  |
| `ph` | `float` | No |  |
| `srm` | `float` | No |  |
| `tagline` | `str` | No |  |
| `target_fg` | `float` | No |  |
| `target_og` | `float` | No |  |
| `volume` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Beer().list()
for beer in results:
    print(beer)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Beer().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BeerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImageEntity

```python
image = client.Image()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Image().load({"id": "image_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = PunkapiSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

