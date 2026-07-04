// Typed models for the Punkapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Beer is the typed data model for the beer entity.
type Beer struct {
	Abv *float64 `json:"abv,omitempty"`
	AttenuationLevel *float64 `json:"attenuation_level,omitempty"`
	BoilVolume *map[string]any `json:"boil_volume,omitempty"`
	BrewersTip *string `json:"brewers_tip,omitempty"`
	ContributedBy *string `json:"contributed_by,omitempty"`
	Description *string `json:"description,omitempty"`
	Ebc *float64 `json:"ebc,omitempty"`
	FirstBrewed *string `json:"first_brewed,omitempty"`
	FoodPairing *[]any `json:"food_pairing,omitempty"`
	Ibu *float64 `json:"ibu,omitempty"`
	Id *int `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Ingredient *map[string]any `json:"ingredient,omitempty"`
	Method *map[string]any `json:"method,omitempty"`
	Name *string `json:"name,omitempty"`
	Ph *float64 `json:"ph,omitempty"`
	Srm *float64 `json:"srm,omitempty"`
	Tagline *string `json:"tagline,omitempty"`
	TargetFg *float64 `json:"target_fg,omitempty"`
	TargetOg *float64 `json:"target_og,omitempty"`
	Volume *map[string]any `json:"volume,omitempty"`
}

// BeerLoadMatch is the typed request payload for Beer.LoadTyped.
type BeerLoadMatch struct {
	Id int `json:"id"`
}

// BeerListMatch mirrors the beer fields as an all-optional match
// filter (Go analog of Partial<Beer>).
type BeerListMatch struct {
	Abv *float64 `json:"abv,omitempty"`
	AttenuationLevel *float64 `json:"attenuation_level,omitempty"`
	BoilVolume *map[string]any `json:"boil_volume,omitempty"`
	BrewersTip *string `json:"brewers_tip,omitempty"`
	ContributedBy *string `json:"contributed_by,omitempty"`
	Description *string `json:"description,omitempty"`
	Ebc *float64 `json:"ebc,omitempty"`
	FirstBrewed *string `json:"first_brewed,omitempty"`
	FoodPairing *[]any `json:"food_pairing,omitempty"`
	Ibu *float64 `json:"ibu,omitempty"`
	Id *int `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Ingredient *map[string]any `json:"ingredient,omitempty"`
	Method *map[string]any `json:"method,omitempty"`
	Name *string `json:"name,omitempty"`
	Ph *float64 `json:"ph,omitempty"`
	Srm *float64 `json:"srm,omitempty"`
	Tagline *string `json:"tagline,omitempty"`
	TargetFg *float64 `json:"target_fg,omitempty"`
	TargetOg *float64 `json:"target_og,omitempty"`
	Volume *map[string]any `json:"volume,omitempty"`
}

// Image is the typed data model for the image entity.
type Image struct {
}

// ImageLoadMatch is the typed request payload for Image.LoadTyped.
type ImageLoadMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
