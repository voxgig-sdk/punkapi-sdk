<?php
declare(strict_types=1);

// Typed models for the Punkapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Beer entity data model. */
class Beer
{
    public ?float $abv = null;
    public ?float $attenuation_level = null;
    public ?array $boil_volume = null;
    public ?string $brewers_tips = null;
    public ?string $contributed_by = null;
    public ?string $description = null;
    public ?float $ebc = null;
    public ?string $first_brewed = null;
    public ?array $food_pairing = null;
    public ?float $ibu = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?array $ingredients = null;
    public ?array $method = null;
    public ?string $name = null;
    public ?float $ph = null;
    public ?float $srm = null;
    public ?string $tagline = null;
    public ?float $target_fg = null;
    public ?float $target_og = null;
    public ?array $volume = null;
}

/** Request payload for Beer#load. */
class BeerLoadMatch
{
    public int $id;
}

/** Request payload for Beer#list. */
class BeerListMatch
{
    public ?float $abv = null;
    public ?float $attenuation_level = null;
    public ?array $boil_volume = null;
    public ?string $brewers_tips = null;
    public ?string $contributed_by = null;
    public ?string $description = null;
    public ?float $ebc = null;
    public ?string $first_brewed = null;
    public ?array $food_pairing = null;
    public ?float $ibu = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?array $ingredients = null;
    public ?array $method = null;
    public ?string $name = null;
    public ?float $ph = null;
    public ?float $srm = null;
    public ?string $tagline = null;
    public ?float $target_fg = null;
    public ?float $target_og = null;
    public ?array $volume = null;
}

/** Image entity data model. */
class Image
{
    public ?string $id = null;
}

/** Request payload for Image#load. */
class ImageLoadMatch
{
    public string $id;
}

