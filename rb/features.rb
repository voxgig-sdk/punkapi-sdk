# Punkapi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module PunkapiFeatures
  def self.make_feature(name)
    case name
    when "base"
      PunkapiBaseFeature.new
    when "ratelimit"
      PunkapiRatelimitFeature.new
    when "retry"
      PunkapiRetryFeature.new
    when "test"
      PunkapiTestFeature.new
    when "timeout"
      PunkapiTimeoutFeature.new
    else
      PunkapiBaseFeature.new
    end
  end
end
