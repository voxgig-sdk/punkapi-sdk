# Punkapi SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module PunkapiFeatures
  def self.make_feature(name)
    case name
    when "base"
      PunkapiBaseFeature.new
    when "test"
      PunkapiTestFeature.new
    else
      PunkapiBaseFeature.new
    end
  end
end
