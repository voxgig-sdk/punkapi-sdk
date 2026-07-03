# Beer entity test

require "minitest/autorun"
require "json"
require_relative "../Punkapi_sdk"
require_relative "runner"

class BeerEntityTest < Minitest::Test
  def test_create_instance
    testsdk = PunkapiSDK.test(nil, nil)
    ent = testsdk.Beer(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = beer_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "beer." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set PUNKAPI_TEST_BEER_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    beer_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.beer")))
    beer_ref01_data = nil
    if beer_ref01_data_raw.length > 0
      beer_ref01_data = Helpers.to_map(beer_ref01_data_raw[0][1])
    end

    # LIST
    beer_ref01_ent = client.Beer(nil)
    beer_ref01_match = {}

    beer_ref01_list_result, err = beer_ref01_ent.list(beer_ref01_match, nil)
    assert_nil err
    assert beer_ref01_list_result.is_a?(Array)

    # LOAD
    beer_ref01_match_dt0 = {
      "id" => beer_ref01_data["id"],
    }
    beer_ref01_data_dt0_loaded, err = beer_ref01_ent.load(beer_ref01_match_dt0, nil)
    assert_nil err
    beer_ref01_data_dt0_load_result = Helpers.to_map(beer_ref01_data_dt0_loaded)
    assert !beer_ref01_data_dt0_load_result.nil?
    assert_equal beer_ref01_data_dt0_load_result["id"], beer_ref01_data["id"]

  end
end

def beer_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "beer", "BeerTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = PunkapiSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["beer01", "beer02", "beer03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["PUNKAPI_TEST_BEER_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "PUNKAPI_TEST_BEER_ENTID" => idmap,
    "PUNKAPI_TEST_LIVE" => "FALSE",
    "PUNKAPI_TEST_EXPLAIN" => "FALSE",
    "PUNKAPI_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["PUNKAPI_TEST_BEER_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["PUNKAPI_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["PUNKAPI_APIKEY"],
      },
      extra || {},
    ])
    client = PunkapiSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["PUNKAPI_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["PUNKAPI_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
