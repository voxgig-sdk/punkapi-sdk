<?php
declare(strict_types=1);

// Punkapi SDK exists test

require_once __DIR__ . '/../punkapi_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = PunkapiSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
