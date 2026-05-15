<?php
declare(strict_types=1);

// Punkapi SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class PunkapiMakeContext
{
    public static function call(array $ctxmap, ?PunkapiContext $basectx): PunkapiContext
    {
        return new PunkapiContext($ctxmap, $basectx);
    }
}
