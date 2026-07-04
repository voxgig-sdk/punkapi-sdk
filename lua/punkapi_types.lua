-- Typed models for the Punkapi SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Beer
---@field abv? number
---@field attenuation_level? number
---@field boil_volume? table
---@field brewers_tip? string
---@field contributed_by? string
---@field description? string
---@field ebc? number
---@field first_brewed? string
---@field food_pairing? table
---@field ibu? number
---@field id? number
---@field image? string
---@field ingredient? table
---@field method? table
---@field name? string
---@field ph? number
---@field srm? number
---@field tagline? string
---@field target_fg? number
---@field target_og? number
---@field volume? table

---@class BeerLoadMatch
---@field id number

---@class BeerListMatch

---@class Image

---@class ImageLoadMatch
---@field id string

local M = {}

return M
