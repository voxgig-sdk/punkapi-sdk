<?php
declare(strict_types=1);

// Punkapi SDK configuration

class PunkapiConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Punkapi",
                "slug" => "punkapi",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://punkapi-alxiw.amvera.io/v3",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "beer" => [],
                    "image" => [],
                ],
            ],
            "entity" => [
        'beer' => [
          'fields' => [
            [
              'name' => 'abv',
              'short' => 'Alcohol by volume percentage',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'attenuation_level',
              'short' => 'Attenuation level percentage',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'boil_volume',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'brewers_tips',
              'short' => 'Tips from the brewers',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'contributed_by',
              'short' => 'Contributor information',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Detailed description of the beer',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ebc',
              'short' => 'European Brewery Convention color scale',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'first_brewed',
              'short' => 'Date when the beer was first brewed (format: MM/YYYY or YYYY)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'food_pairing',
              'short' => 'List of foods that pair well with this beer',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'ibu',
              'short' => 'International Bitterness Units',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the beer',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'image',
              'short' => 'Filename of the beer\'s image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ingredients',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'method',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the beer',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ph',
              'short' => 'pH level of the beer',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'srm',
              'short' => 'Standard Reference Method color scale',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'tagline',
              'short' => 'Short tagline or description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'target_fg',
              'short' => 'Target final gravity',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'target_og',
              'short' => 'Target original gravity',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'volume',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'beer',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 5,
                        'kind' => 'query',
                        'name' => 'abv_gt',
                        'orig' => 'abv_gt',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'abv_lt',
                        'orig' => 'abv_lt',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'beer_name',
                        'orig' => 'beer_name',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '01-2015',
                        'kind' => 'query',
                        'name' => 'brewed_after',
                        'orig' => 'brewed_after',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '12-2018',
                        'kind' => 'query',
                        'name' => 'brewed_before',
                        'orig' => 'brewed_before',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'ebc_gt',
                        'orig' => 'ebc_gt',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'ebc_lt',
                        'orig' => 'ebc_lt',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => 'chicken',
                        'kind' => 'query',
                        'name' => 'food',
                        'orig' => 'food',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 40,
                        'kind' => 'query',
                        'name' => 'ibu_gt',
                        'orig' => 'ibu_gt',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'ibu_lt',
                        'orig' => 'ibu_lt',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => '1,2,3',
                        'kind' => 'query',
                        'name' => 'ids',
                        'orig' => 'ids',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 30,
                        'kind' => 'query',
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/beers',
                  'parts' => [
                    'beers',
                  ],
                  'select' => [
                    'exist' => [
                      'abv_gt',
                      'abv_lt',
                      'beer_name',
                      'brewed_after',
                      'brewed_before',
                      'ebc_gt',
                      'ebc_lt',
                      'food',
                      'ibu_gt',
                      'ibu_lt',
                      'ids',
                      'page',
                      'per_page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/beers/random',
                  'parts' => [
                    'beers',
                    'random',
                  ],
                  'select' => [
                    '$action' => 'random',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/beers/{id}',
                  'parts' => [
                    'beers',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'image' => [
          'fields' => [],
          'name' => 'image',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '366.png',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'filename',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/images/{filename}',
                  'parts' => [
                    'images',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'filename' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return PunkapiFeatures::make_feature($name);
    }
}
