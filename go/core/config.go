package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Punkapi",
			"slug": "punkapi",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://punkapi-alxiw.amvera.io/v3",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"beer": map[string]any{},
				"image": map[string]any{},
			},
		},
		"entity": map[string]any{
			"beer": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "abv",
						"short": "Alcohol by volume percentage",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "attenuation_level",
						"short": "Attenuation level percentage",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "boil_volume",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "brewers_tips",
						"short": "Tips from the brewers",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "contributed_by",
						"short": "Contributor information",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Detailed description of the beer",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ebc",
						"short": "European Brewery Convention color scale",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "first_brewed",
						"short": "Date when the beer was first brewed (format: MM/YYYY or YYYY)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "food_pairing",
						"short": "List of foods that pair well with this beer",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "ibu",
						"short": "International Bitterness Units",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the beer",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "image",
						"short": "Filename of the beer's image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ingredients",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "method",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the beer",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ph",
						"short": "pH level of the beer",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "srm",
						"short": "Standard Reference Method color scale",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "tagline",
						"short": "Short tagline or description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "target_fg",
						"short": "Target final gravity",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "target_og",
						"short": "Target original gravity",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "volume",
						"type": "`$OBJECT`",
					},
				},
				"name": "beer",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 5,
											"kind": "query",
											"name": "abv_gt",
											"orig": "abv_gt",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "abv_lt",
											"orig": "abv_lt",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "beer_name",
											"orig": "beer_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "01-2015",
											"kind": "query",
											"name": "brewed_after",
											"orig": "brewed_after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "12-2018",
											"kind": "query",
											"name": "brewed_before",
											"orig": "brewed_before",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "ebc_gt",
											"orig": "ebc_gt",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "ebc_lt",
											"orig": "ebc_lt",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": "chicken",
											"kind": "query",
											"name": "food",
											"orig": "food",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 40,
											"kind": "query",
											"name": "ibu_gt",
											"orig": "ibu_gt",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "ibu_lt",
											"orig": "ibu_lt",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": "1,2,3",
											"kind": "query",
											"name": "ids",
											"orig": "ids",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 30,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/beers",
								"parts": []any{
									"beers",
								},
								"select": map[string]any{
									"exist": []any{
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
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/beers/random",
								"parts": []any{
									"beers",
									"random",
								},
								"select": map[string]any{
									"$action": "random",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/beers/{id}",
								"parts": []any{
									"beers",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"image": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"name": "image",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "366.png",
											"kind": "param",
											"name": "id",
											"orig": "filename",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/images/{filename}",
								"parts": []any{
									"images",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"filename": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
