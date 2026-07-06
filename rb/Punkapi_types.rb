# frozen_string_literal: true

# Typed models for the Punkapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Beer entity data model.
#
# @!attribute [rw] abv
#   @return [Float, nil]
#
# @!attribute [rw] attenuation_level
#   @return [Float, nil]
#
# @!attribute [rw] boil_volume
#   @return [Hash, nil]
#
# @!attribute [rw] brewers_tip
#   @return [String, nil]
#
# @!attribute [rw] contributed_by
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] ebc
#   @return [Float, nil]
#
# @!attribute [rw] first_brewed
#   @return [String, nil]
#
# @!attribute [rw] food_pairing
#   @return [Array, nil]
#
# @!attribute [rw] ibu
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] ingredient
#   @return [Hash, nil]
#
# @!attribute [rw] method
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] ph
#   @return [Float, nil]
#
# @!attribute [rw] srm
#   @return [Float, nil]
#
# @!attribute [rw] tagline
#   @return [String, nil]
#
# @!attribute [rw] target_fg
#   @return [Float, nil]
#
# @!attribute [rw] target_og
#   @return [Float, nil]
#
# @!attribute [rw] volume
#   @return [Hash, nil]
Beer = Struct.new(
  :abv,
  :attenuation_level,
  :boil_volume,
  :brewers_tip,
  :contributed_by,
  :description,
  :ebc,
  :first_brewed,
  :food_pairing,
  :ibu,
  :id,
  :image,
  :ingredient,
  :method,
  :name,
  :ph,
  :srm,
  :tagline,
  :target_fg,
  :target_og,
  :volume,
  keyword_init: true
)

# Request payload for Beer#load.
#
# @!attribute [rw] id
#   @return [Integer]
BeerLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Beer#list.
#
# @!attribute [rw] abv
#   @return [Float, nil]
#
# @!attribute [rw] attenuation_level
#   @return [Float, nil]
#
# @!attribute [rw] boil_volume
#   @return [Hash, nil]
#
# @!attribute [rw] brewers_tip
#   @return [String, nil]
#
# @!attribute [rw] contributed_by
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] ebc
#   @return [Float, nil]
#
# @!attribute [rw] first_brewed
#   @return [String, nil]
#
# @!attribute [rw] food_pairing
#   @return [Array, nil]
#
# @!attribute [rw] ibu
#   @return [Float, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] ingredient
#   @return [Hash, nil]
#
# @!attribute [rw] method
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] ph
#   @return [Float, nil]
#
# @!attribute [rw] srm
#   @return [Float, nil]
#
# @!attribute [rw] tagline
#   @return [String, nil]
#
# @!attribute [rw] target_fg
#   @return [Float, nil]
#
# @!attribute [rw] target_og
#   @return [Float, nil]
#
# @!attribute [rw] volume
#   @return [Hash, nil]
BeerListMatch = Struct.new(
  :abv,
  :attenuation_level,
  :boil_volume,
  :brewers_tip,
  :contributed_by,
  :description,
  :ebc,
  :first_brewed,
  :food_pairing,
  :ibu,
  :id,
  :image,
  :ingredient,
  :method,
  :name,
  :ph,
  :srm,
  :tagline,
  :target_fg,
  :target_og,
  :volume,
  keyword_init: true
)

# Image entity data model.
class Image
end

# Request payload for Image#load.
#
# @!attribute [rw] id
#   @return [String]
ImageLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

