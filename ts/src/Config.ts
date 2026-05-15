
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

    auth: {
      prefix: 'Bearer',
    },

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
          "name": "abv",
          "req": false,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 0
        },
        {
          "name": "attenuation_level",
          "req": false,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 1
        },
        {
          "name": "boil_volume",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 2
        },
        {
          "name": "brewers_tip",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "contributed_by",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "description",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "ebc",
          "req": false,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 6
        },
        {
          "name": "first_brewed",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 7
        },
        {
          "name": "food_pairing",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 8
        },
        {
          "name": "ibu",
          "req": false,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 9
        },
        {
          "name": "id",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 10
        },
        {
          "name": "image",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 11
        },
        {
          "name": "ingredient",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 12
        },
        {
          "name": "method",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 13
        },
        {
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 14
        },
        {
          "name": "ph",
          "req": false,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 15
        },
        {
          "name": "srm",
          "req": false,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 16
        },
        {
          "name": "tagline",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 17
        },
        {
          "name": "target_fg",
          "req": false,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 18
        },
        {
          "name": "target_og",
          "req": false,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 19
        },
        {
          "name": "volume",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 20
        }
      ],
      "name": "beer",
      "op": {
        "list": {
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
                    "reqd": false,
                    "type": "`$NUMBER`",
                    "active": true
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "abv_lt",
                    "orig": "abv_lt",
                    "reqd": false,
                    "type": "`$NUMBER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "beer_name",
                    "orig": "beer_name",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "01-2015",
                    "kind": "query",
                    "name": "brewed_after",
                    "orig": "brewed_after",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "12-2018",
                    "kind": "query",
                    "name": "brewed_before",
                    "orig": "brewed_before",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": 20,
                    "kind": "query",
                    "name": "ebc_gt",
                    "orig": "ebc_gt",
                    "reqd": false,
                    "type": "`$NUMBER`",
                    "active": true
                  },
                  {
                    "example": 50,
                    "kind": "query",
                    "name": "ebc_lt",
                    "orig": "ebc_lt",
                    "reqd": false,
                    "type": "`$NUMBER`",
                    "active": true
                  },
                  {
                    "example": "chicken",
                    "kind": "query",
                    "name": "food",
                    "orig": "food",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": 40,
                    "kind": "query",
                    "name": "ibu_gt",
                    "orig": "ibu_gt",
                    "reqd": false,
                    "type": "`$NUMBER`",
                    "active": true
                  },
                  {
                    "example": 100,
                    "kind": "query",
                    "name": "ibu_lt",
                    "orig": "ibu_lt",
                    "reqd": false,
                    "type": "`$NUMBER`",
                    "active": true
                  },
                  {
                    "example": "1,2,3",
                    "kind": "query",
                    "name": "ids",
                    "orig": "ids",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "example": 30,
                    "kind": "query",
                    "name": "per_page",
                    "orig": "per_page",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
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
              "active": true,
              "index$": 0
            },
            {
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
              "active": true,
              "args": {},
              "index$": 1
            }
          ],
          "input": "data",
          "key$": "list"
        },
        "load": {
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
                    "type": "`$INTEGER`",
                    "active": true
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
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
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
                    "type": "`$STRING`",
                    "active": true
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
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
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

