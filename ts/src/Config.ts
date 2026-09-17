
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Punkapi',
        slug: "punkapi",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://punkapi-alxiw.amvera.io/v3",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        beer: {
        },
  
        image: {
        },
  
    }
  }


  entity = {
    "beer": {
      "fields": [
        {
          "format": "float",
          "name": "abv",
          "short": "Alcohol by volume percentage",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "attenuation_level",
          "short": "Attenuation level percentage",
          "type": "`$NUMBER`"
        },
        {
          "name": "boil_volume",
          "type": "`$OBJECT`"
        },
        {
          "name": "brewers_tips",
          "short": "Tips from the brewers",
          "type": "`$STRING`"
        },
        {
          "name": "contributed_by",
          "short": "Contributor information",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Detailed description of the beer",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "ebc",
          "short": "European Brewery Convention color scale",
          "type": "`$NUMBER`"
        },
        {
          "name": "first_brewed",
          "short": "Date when the beer was first brewed (format: MM/YYYY or YYYY)",
          "type": "`$STRING`"
        },
        {
          "name": "food_pairing",
          "short": "List of foods that pair well with this beer",
          "type": "`$ARRAY`"
        },
        {
          "format": "float",
          "name": "ibu",
          "short": "International Bitterness Units",
          "type": "`$NUMBER`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the beer",
          "type": "`$INTEGER`"
        },
        {
          "name": "image",
          "short": "Filename of the beer's image",
          "type": "`$STRING`"
        },
        {
          "name": "ingredients",
          "type": "`$OBJECT`"
        },
        {
          "name": "method",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "short": "Name of the beer",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "ph",
          "short": "pH level of the beer",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "srm",
          "short": "Standard Reference Method color scale",
          "type": "`$NUMBER`"
        },
        {
          "name": "tagline",
          "short": "Short tagline or description",
          "type": "`$STRING`"
        },
        {
          "format": "float",
          "name": "target_fg",
          "short": "Target final gravity",
          "type": "`$NUMBER`"
        },
        {
          "format": "float",
          "name": "target_og",
          "short": "Target original gravity",
          "type": "`$NUMBER`"
        },
        {
          "name": "volume",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "beer",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 5,
                    "kind": "query",
                    "name": "abv_gt",
                    "orig": "abv_gt",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "abv_lt",
                    "orig": "abv_lt",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "beer_name",
                    "orig": "beer_name",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "01-2015",
                    "kind": "query",
                    "name": "brewed_after",
                    "orig": "brewed_after",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "12-2018",
                    "kind": "query",
                    "name": "brewed_before",
                    "orig": "brewed_before",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 20,
                    "kind": "query",
                    "name": "ebc_gt",
                    "orig": "ebc_gt",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "ebc_lt",
                    "orig": "ebc_lt",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": "chicken",
                    "kind": "query",
                    "name": "food",
                    "orig": "food",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 40,
                    "kind": "query",
                    "name": "ibu_gt",
                    "orig": "ibu_gt",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": 100,
                    "kind": "query",
                    "name": "ibu_lt",
                    "orig": "ibu_lt",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": "1,2,3",
                    "kind": "query",
                    "name": "ids",
                    "orig": "ids",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 30,
                    "kind": "query",
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/beers",
              "segments": [
                {
                  "lit": "beers"
                }
              ],
              "select": {
                "exist": [
                  "abv_gt",
                  "abv_lt",
                  "beer_name",
                  "brewed_after",
                  "brewed_before",
                  "ebc_gt",
                  "ebc_lt",
                  "food",
                  "ibu_gt",
                  "ibu_lt",
                  "ids",
                  "page",
                  "per_page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "beers"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/beers/random",
              "segments": [
                {
                  "lit": "beers"
                },
                {
                  "lit": "random"
                }
              ],
              "select": {
                "$action": "random"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "beers",
                "random"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/beers/{id}",
              "segments": [
                {
                  "lit": "beers"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "beers",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "image": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "image",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "366.png",
                    "kind": "param",
                    "name": "id",
                    "orig": "filename",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/images/{filename}",
              "rename": {
                "param": {
                  "filename": "id"
                }
              },
              "segments": [
                {
                  "lit": "images"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "images",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

