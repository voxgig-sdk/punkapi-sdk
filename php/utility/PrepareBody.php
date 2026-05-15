<?php
declare(strict_types=1);

// Punkapi SDK utility: prepare_body

class PunkapiPrepareBody
{
    public static function call(PunkapiContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
