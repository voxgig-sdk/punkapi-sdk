# Punkapi SDK configuration

module PunkapiConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Punkapi",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://punkapi-alxiw.amvera.io/v3",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "beer" => {},
          "image" => {},
        },
      },
      "entity" => {
        "beer" => {
          "fields" => [
            {
              "name" => "abv",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "attenuation_level",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "boil_volume",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "brewers_tips",
              "type" => "`$STRING`",
            },
            {
              "name" => "contributed_by",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "type" => "`$STRING`",
            },
            {
              "name" => "ebc",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "first_brewed",
              "type" => "`$STRING`",
            },
            {
              "name" => "food_pairing",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "ibu",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "image",
              "type" => "`$STRING`",
            },
            {
              "name" => "ingredients",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "method",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "name",
              "type" => "`$STRING`",
            },
            {
              "name" => "ph",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "srm",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "tagline",
              "type" => "`$STRING`",
            },
            {
              "name" => "target_fg",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "target_og",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "volume",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "beer",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => 5,
                        "kind" => "query",
                        "name" => "abv_gt",
                        "orig" => "abv_gt",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "abv_lt",
                        "orig" => "abv_lt",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "beer_name",
                        "orig" => "beer_name",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "01-2015",
                        "kind" => "query",
                        "name" => "brewed_after",
                        "orig" => "brewed_after",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "12-2018",
                        "kind" => "query",
                        "name" => "brewed_before",
                        "orig" => "brewed_before",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 20,
                        "kind" => "query",
                        "name" => "ebc_gt",
                        "orig" => "ebc_gt",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => 50,
                        "kind" => "query",
                        "name" => "ebc_lt",
                        "orig" => "ebc_lt",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => "chicken",
                        "kind" => "query",
                        "name" => "food",
                        "orig" => "food",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 40,
                        "kind" => "query",
                        "name" => "ibu_gt",
                        "orig" => "ibu_gt",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => 100,
                        "kind" => "query",
                        "name" => "ibu_lt",
                        "orig" => "ibu_lt",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => "1,2,3",
                        "kind" => "query",
                        "name" => "ids",
                        "orig" => "ids",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 30,
                        "kind" => "query",
                        "name" => "per_page",
                        "orig" => "per_page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/beers",
                  "parts" => [
                    "beers",
                  ],
                  "select" => {
                    "exist" => [
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
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/beers/random",
                  "parts" => [
                    "beers",
                    "random",
                  ],
                  "select" => {
                    "$action" => "random",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/beers/{id}",
                  "parts" => [
                    "beers",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "image" => {
          "fields" => [],
          "name" => "image",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "366.png",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "filename",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/images/{filename}",
                  "parts" => [
                    "images",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "filename" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    PunkapiFeatures.make_feature(name)
  end
end
