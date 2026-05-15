package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Punkapi",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://punkapi-alxiw.amvera.io/v3",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
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
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "attenuation_level",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "boil_volume",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "brewers_tip",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "contributed_by",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "ebc",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "first_brewed",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "food_pairing",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "ibu",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "id",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "image",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "ingredient",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "method",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 14,
					},
					map[string]any{
						"name": "ph",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 15,
					},
					map[string]any{
						"name": "srm",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 16,
					},
					map[string]any{
						"name": "tagline",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 17,
					},
					map[string]any{
						"name": "target_fg",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 18,
					},
					map[string]any{
						"name": "target_og",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 19,
					},
					map[string]any{
						"name": "volume",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 20,
					},
				},
				"name": "beer",
				"op": map[string]any{
					"list": map[string]any{
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
											"reqd": false,
											"type": "`$NUMBER`",
											"active": true,
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "abv_lt",
											"orig": "abv_lt",
											"reqd": false,
											"type": "`$NUMBER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "beer_name",
											"orig": "beer_name",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "01-2015",
											"kind": "query",
											"name": "brewed_after",
											"orig": "brewed_after",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "12-2018",
											"kind": "query",
											"name": "brewed_before",
											"orig": "brewed_before",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 20,
											"kind": "query",
											"name": "ebc_gt",
											"orig": "ebc_gt",
											"reqd": false,
											"type": "`$NUMBER`",
											"active": true,
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "ebc_lt",
											"orig": "ebc_lt",
											"reqd": false,
											"type": "`$NUMBER`",
											"active": true,
										},
										map[string]any{
											"example": "chicken",
											"kind": "query",
											"name": "food",
											"orig": "food",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 40,
											"kind": "query",
											"name": "ibu_gt",
											"orig": "ibu_gt",
											"reqd": false,
											"type": "`$NUMBER`",
											"active": true,
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "ibu_lt",
											"orig": "ibu_lt",
											"reqd": false,
											"type": "`$NUMBER`",
											"active": true,
										},
										map[string]any{
											"example": "1,2,3",
											"kind": "query",
											"name": "ids",
											"orig": "ids",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": 30,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
							map[string]any{
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
								"active": true,
								"args": map[string]any{},
								"index$": 1,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"image": map[string]any{
				"fields": []any{},
				"name": "image",
				"op": map[string]any{
					"load": map[string]any{
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
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
