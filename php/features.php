<?php
declare(strict_types=1);

// Punkapi SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class PunkapiFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new PunkapiBaseFeature();
            case "test":
                return new PunkapiTestFeature();
            default:
                return new PunkapiBaseFeature();
        }
    }
}
