# Typed models for the Punkapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Beer:
    abv: Optional[float] = None
    attenuation_level: Optional[float] = None
    boil_volume: Optional[dict] = None
    brewers_tip: Optional[str] = None
    contributed_by: Optional[str] = None
    description: Optional[str] = None
    ebc: Optional[float] = None
    first_brewed: Optional[str] = None
    food_pairing: Optional[list] = None
    ibu: Optional[float] = None
    id: Optional[int] = None
    image: Optional[str] = None
    ingredient: Optional[dict] = None
    method: Optional[dict] = None
    name: Optional[str] = None
    ph: Optional[float] = None
    srm: Optional[float] = None
    tagline: Optional[str] = None
    target_fg: Optional[float] = None
    target_og: Optional[float] = None
    volume: Optional[dict] = None


@dataclass
class BeerLoadMatch:
    id: int


@dataclass
class BeerListMatch:
    abv: Optional[float] = None
    attenuation_level: Optional[float] = None
    boil_volume: Optional[dict] = None
    brewers_tip: Optional[str] = None
    contributed_by: Optional[str] = None
    description: Optional[str] = None
    ebc: Optional[float] = None
    first_brewed: Optional[str] = None
    food_pairing: Optional[list] = None
    ibu: Optional[float] = None
    id: Optional[int] = None
    image: Optional[str] = None
    ingredient: Optional[dict] = None
    method: Optional[dict] = None
    name: Optional[str] = None
    ph: Optional[float] = None
    srm: Optional[float] = None
    tagline: Optional[str] = None
    target_fg: Optional[float] = None
    target_og: Optional[float] = None
    volume: Optional[dict] = None


@dataclass
class Image:
    pass


@dataclass
class ImageLoadMatch:
    id: str

