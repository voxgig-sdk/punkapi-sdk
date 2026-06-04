# Punkapi SDK

Browse BrewDog's DIY Dog beer catalogue with recipes, stats and artwork for 415 brews

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About PunkAPI

PunkAPI is a FastAPI-based reimplementation of the original PunkAPI, maintained by [alxiw](https://github.com/alxiw/punkapi). It exposes [BrewDog](https://www.brewdog.com/)'s DIY Dog homebrew catalogue as a JSON API, acting as a digital archive of every recipe BrewDog has published.

What you get from the API:

- A catalogue of 415 beers migrated from the original DIY Dog PDF.
- Per-beer detail including name, tagline, brewing date, description, ABV, IBU, EBC, SRM, pH, attenuation level, volume, fermentation method, malt / hops / yeast ingredient lists, food pairings and brewer's notes.
- Endpoints to fetch a single beer by id, a random beer, or a paginated list (30 per page by default), plus PNG artwork for each beer.
- Query filters across name, id range, brewing date (MM-YYYY or YYYY), ABV / IBU / EBC ranges and food pairings.

The service is open and requires no authentication or API key. CORS is disabled on the upstream service, so browser-side calls will need to go through a proxy. The v3 base URL is `https://punkapi-alxiw.amvera.io/v3/`.

## Try it

**TypeScript**
```bash
npm install punkapi
```

**Python**
```bash
pip install punkapi-sdk
```

**PHP**
```bash
composer require voxgig/punkapi-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/punkapi-sdk/go
```

**Ruby**
```bash
gem install punkapi-sdk
```

**Lua**
```bash
luarocks install punkapi-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { PunkapiSDK } from 'punkapi'

const client = new PunkapiSDK({})

// List all beers
const beers = await client.Beer().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o punkapi-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "punkapi": {
      "command": "/abs/path/to/punkapi-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Beer** | A single brew from the DIY Dog catalogue with recipe stats, ingredients and brewer notes; available via `/beers`, `/beers/{id}` and `/beers/random`. | `/beers` |
| **Image** | PNG artwork associated with a beer entry, served from `/images/{id}.png`. | `/images/{filename}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from punkapi_sdk import PunkapiSDK

client = PunkapiSDK({})

# List all beers
beers, err = client.Beer(None).list(None, None)

# Load a specific beer
beer, err = client.Beer(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'punkapi_sdk.php';

$client = new PunkapiSDK([]);

// List all beers
[$beers, $err] = $client->Beer(null)->list(null, null);

// Load a specific beer
[$beer, $err] = $client->Beer(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/punkapi-sdk/go"

client := sdk.NewPunkapiSDK(map[string]any{})

// List all beers
beers, err := client.Beer(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Punkapi_sdk"

client = PunkapiSDK.new({})

# List all beers
beers, err = client.Beer(nil).list(nil, nil)

# Load a specific beer
beer, err = client.Beer(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("punkapi_sdk")

local client = sdk.new({})

-- List all beers
local beers, err = client:Beer(nil):list(nil, nil)

-- Load a specific beer
local beer, err = client:Beer(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = PunkapiSDK.test()
const result = await client.Beer().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = PunkapiSDK.test(None, None)
result, err = client.Beer(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = PunkapiSDK::test(null, null);
[$result, $err] = $client->Beer(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Beer(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = PunkapiSDK.test(nil, nil)
result, err = client.Beer(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Beer(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the PunkAPI

- Upstream: [https://punkapi-alxiw.amvera.io/v3/](https://punkapi-alxiw.amvera.io/v3/)
- API docs: [https://github.com/alxiw/punkapi](https://github.com/alxiw/punkapi)

- Code and service released under the MIT licence by alxiw.
- Beer data is drawn from BrewDog's publicly published DIY Dog catalogue.
- BrewDog branding, recipe text and artwork remain the property of their respective owners; check BrewDog's terms before redistributing.
- This is a community rebuild of an earlier PunkAPI that was discontinued in May 2024; treat the service as best-effort.

---

Generated from the PunkAPI OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
