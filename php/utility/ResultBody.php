<?php
declare(strict_types=1);

// Punkapi SDK utility: result_body

class PunkapiResultBody
{
    public static function call(PunkapiContext $ctx): ?PunkapiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
