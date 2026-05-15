<?php
declare(strict_types=1);

// Punkapi SDK utility: feature_hook

class PunkapiFeatureHook
{
    public static function call(PunkapiContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
