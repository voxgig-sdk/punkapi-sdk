
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://punkapi-alxiw.amvera.io/v3',

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
          "active": true,
          "name": "abv",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 0
        },
        {
          "active": true,
          "name": "attenuation_level",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 1
        },
        {
          "active": true,
          "name": "boil_volume",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 2
        },
        {
          "active": true,
          "name": "brewers_tip",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "contributed_by",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "description",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "ebc",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 6
        },
        {
          "active": true,
          "name": "first_brewed",
          "req": false,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "food_pairing",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 8
        },
        {
          "active": true,
          "name": "ibu",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 9
        },
        {
          "active": true,
          "name": "id",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 10
        },
        {
          "active": true,
          "name": "image",
          "req": false,
          "type": "`$STRING`",
          "index$": 11
        },
        {
          "active": true,
          "name": "ingredient",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 12
        },
        {
          "active": true,
          "name": "method",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 13
        },
        {
          "active": true,
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "index$": 14
        },
        {
          "active": true,
          "name": "ph",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 15
        },
        {
          "active": true,
          "name": "srm",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 16
        },
        {
          "active": true,
          "name": "tagline",
          "req": false,
          "type": "`$STRING`",
          "index$": 17
        },
        {
          "active": true,
          "name": "target_fg",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 18
        },
        {
          "active": true,
          "name": "target_og",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 19
        },
        {
          "active": true,
          "name": "volume",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 20
        }
      ],
      "name": "beer",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": 5,
                    "kind": "query",
                    "name": "abv_gt",
                    "orig": "abv_gt",
                    "reqd": false,
                    "type": "`$NUMBER`"
                  },
                  {
                    "active": true,
                    "example": 10,
                    "kind": "query",
                    "name": "abv_lt",
                    "orig": "abv_lt",
                    "reqd": false,
                    "type": "`$NUMBER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "beer_name",
                    "orig": "beer_name",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "01-2015",
                    "kind": "query",
                    "name": "brewed_after",
                    "orig": "brewed_after",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "12-2018",
                    "kind": "query",
                    "name": "brewed_before",
                    "orig": "brewed_before",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": 20,
                    "kind": "query",
                    "name": "ebc_gt",
                    "orig": "ebc_gt",
                    "reqd": false,
                    "type": "`$NUMBER`"
                  },
                  {
                    "active": true,
                    "example": 50,
                    "kind": "query",
                    "name": "ebc_lt",
                    "orig": "ebc_lt",
                    "reqd": false,
                    "type": "`$NUMBER`"
                  },
                  {
                    "active": true,
                    "example": "chicken",
                    "kind": "query",
                    "name": "food",
                    "orig": "food",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": 40,
                    "kind": "query",
                    "name": "ibu_gt",
                    "orig": "ibu_gt",
                    "reqd": false,
                    "type": "`$NUMBER`"
                  },
                  {
                    "active": true,
                    "example": 100,
                    "kind": "query",
                    "name": "ibu_lt",
                    "orig": "ibu_lt",
                    "reqd": false,
                    "type": "`$NUMBER`"
                  },
                  {
                    "active": true,
                    "example": "1,2,3",
                    "kind": "query",
                    "name": "ids",
                    "orig": "ids",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "example": 30,
                    "kind": "query",
                    "name": "per_page",
                    "orig": "per_page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/beers",
              "parts": [
                "beers"
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
              "index$": 0
            },
            {
              "active": true,
              "args": {},
              "method": "GET",
              "orig": "/beers/random",
              "parts": [
                "beers",
                "random"
              ],
              "select": {
                "$action": "random"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 1
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "params": [
                  {
                    "active": true,
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "index$": 0
                  }
                ]
              },
              "method": "GET",
              "orig": "/beers/{id}",
              "parts": [
                "beers",
                "{id}"
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
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "image": {
      "fields": [],
      "name": "image",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "params": [
                  {
                    "active": true,
                    "example": "366.png",
                    "kind": "param",
                    "name": "id",
                    "orig": "filename",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "method": "GET",
              "orig": "/images/{filename}",
              "parts": [
                "images",
                "{id}"
              ],
              "rename": {
                "param": {
                  "filename": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
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
  config
}

