<?php
declare(strict_types=1);

// Beer entity test

require_once __DIR__ . '/../punkapi_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class BeerEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = PunkapiSDK::test(null, null);
        $ent = $testsdk->Beer(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "beer" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = PunkapiSDK::test($seed, null);
        $seen = iterator_to_array($base->Beer(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = PunkapiConfig::make_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = PunkapiSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Beer(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = beer_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "beer." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set PUNKAPI_TEST_BEER_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $beer_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.beer")));
        $beer_ref01_data = null;
        if (count($beer_ref01_data_raw) > 0) {
            $beer_ref01_data = Helpers::to_map($beer_ref01_data_raw[0][1]);
        }

        // LIST
        $beer_ref01_ent = $client->Beer(null);
        $beer_ref01_match = [];

        $beer_ref01_list_result = $beer_ref01_ent->list($beer_ref01_match, null);
        $this->assertIsArray($beer_ref01_list_result);

        // LOAD
        $beer_ref01_match_dt0 = [
            "id" => $beer_ref01_data["id"],
        ];
        $beer_ref01_data_dt0_loaded = $beer_ref01_ent->load($beer_ref01_match_dt0, null);
        $beer_ref01_data_dt0_load_result = Helpers::to_map(is_object($beer_ref01_data_dt0_loaded) && method_exists($beer_ref01_data_dt0_loaded, 'data_get') ? $beer_ref01_data_dt0_loaded->data_get() : $beer_ref01_data_dt0_loaded);
        $this->assertNotNull($beer_ref01_data_dt0_load_result);
        $this->assertEquals($beer_ref01_data_dt0_load_result["id"], $beer_ref01_data["id"]);

    }
}

function beer_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/beer/BeerTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = PunkapiSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["beer01", "beer02", "beer03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("PUNKAPI_TEST_BEER_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "PUNKAPI_TEST_BEER_ENTID" => $idmap,
        "PUNKAPI_TEST_LIVE" => "FALSE",
        "PUNKAPI_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["PUNKAPI_TEST_BEER_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["PUNKAPI_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new PunkapiSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["PUNKAPI_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["PUNKAPI_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
