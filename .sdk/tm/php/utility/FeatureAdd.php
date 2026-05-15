<?php
declare(strict_types=1);

// Punkapi SDK utility: feature_add

class PunkapiFeatureAdd
{
    public static function call(PunkapiContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
