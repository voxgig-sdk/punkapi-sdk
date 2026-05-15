# Punkapi SDK exists test

require "minitest/autorun"
require_relative "../Punkapi_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = PunkapiSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
