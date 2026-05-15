<?php
declare(strict_types=1);

// Punkapi SDK utility: result_headers

class PunkapiResultHeaders
{
    public static function call(PunkapiContext $ctx): ?PunkapiResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
