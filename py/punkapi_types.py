# Typed models for the Punkapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Beer(TypedDict, total=False):
    abv: float
    attenuation_level: float
    boil_volume: dict
    brewers_tip: str
    contributed_by: str
    description: str
    ebc: float
    first_brewed: str
    food_pairing: list
    ibu: float
    id: int
    image: str
    ingredient: dict
    method: dict
    name: str
    ph: float
    srm: float
    tagline: str
    target_fg: float
    target_og: float
    volume: dict


class BeerLoadMatch(TypedDict):
    id: int


class BeerListMatch(TypedDict, total=False):
    abv: float
    attenuation_level: float
    boil_volume: dict
    brewers_tip: str
    contributed_by: str
    description: str
    ebc: float
    first_brewed: str
    food_pairing: list
    ibu: float
    id: int
    image: str
    ingredient: dict
    method: dict
    name: str
    ph: float
    srm: float
    tagline: str
    target_fg: float
    target_og: float
    volume: dict


class Image(TypedDict):
    pass


class ImageLoadMatch(TypedDict):
    id: str
