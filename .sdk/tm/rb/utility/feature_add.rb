# Punkapi SDK utility: feature_add
module PunkapiUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
