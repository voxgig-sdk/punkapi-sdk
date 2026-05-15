# Punkapi SDK configuration


def make_config():
    return {
        "main": {
            "name": "Punkapi",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://punkapi-alxiw.amvera.io/v3",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "beer": {},
                "image": {},
            },
        },
        "entity": {
      "beer": {
        "fields": [
          {
            "name": "abv",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "attenuation_level",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "boil_volume",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "brewers_tip",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "contributed_by",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "ebc",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "first_brewed",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "food_pairing",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "ibu",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "image",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "ingredient",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "method",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "ph",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "srm",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 16,
          },
          {
            "name": "tagline",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 17,
          },
          {
            "name": "target_fg",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 18,
          },
          {
            "name": "target_og",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 19,
          },
          {
            "name": "volume",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 20,
          },
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
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "abv_lt",
                      "orig": "abv_lt",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "beer_name",
                      "orig": "beer_name",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "01-2015",
                      "kind": "query",
                      "name": "brewed_after",
                      "orig": "brewed_after",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "12-2018",
                      "kind": "query",
                      "name": "brewed_before",
                      "orig": "brewed_before",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 20,
                      "kind": "query",
                      "name": "ebc_gt",
                      "orig": "ebc_gt",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": 50,
                      "kind": "query",
                      "name": "ebc_lt",
                      "orig": "ebc_lt",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": "chicken",
                      "kind": "query",
                      "name": "food",
                      "orig": "food",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 40,
                      "kind": "query",
                      "name": "ibu_gt",
                      "orig": "ibu_gt",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": 100,
                      "kind": "query",
                      "name": "ibu_lt",
                      "orig": "ibu_lt",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": "1,2,3",
                      "kind": "query",
                      "name": "ids",
                      "orig": "ids",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": 30,
                      "kind": "query",
                      "name": "per_page",
                      "orig": "per_page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/beers",
                "parts": [
                  "beers",
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
                    "per_page",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
              {
                "method": "GET",
                "orig": "/beers/random",
                "parts": [
                  "beers",
                  "random",
                ],
                "select": {
                  "$action": "random",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "index$": 1,
              },
            ],
            "input": "data",
            "key$": "list",
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
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/beers/{id}",
                "parts": [
                  "beers",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/images/{filename}",
                "parts": [
                  "images",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "filename": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
