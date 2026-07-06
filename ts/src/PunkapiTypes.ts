// Typed models for the Punkapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Beer {
  abv?: number
  attenuation_level?: number
  boil_volume?: Record<string, any>
  brewers_tip?: string
  contributed_by?: string
  description?: string
  ebc?: number
  first_brewed?: string
  food_pairing?: any[]
  ibu?: number
  id?: number
  image?: string
  ingredient?: Record<string, any>
  method?: Record<string, any>
  name?: string
  ph?: number
  srm?: number
  tagline?: string
  target_fg?: number
  target_og?: number
  volume?: Record<string, any>
}

export interface BeerLoadMatch {
  id: number
}

export interface BeerListMatch {
  abv?: number
  attenuation_level?: number
  boil_volume?: Record<string, any>
  brewers_tip?: string
  contributed_by?: string
  description?: string
  ebc?: number
  first_brewed?: string
  food_pairing?: any[]
  ibu?: number
  id?: number
  image?: string
  ingredient?: Record<string, any>
  method?: Record<string, any>
  name?: string
  ph?: number
  srm?: number
  tagline?: string
  target_fg?: number
  target_og?: number
  volume?: Record<string, any>
}

export interface Image {
}

export interface ImageLoadMatch {
  id: string
}

