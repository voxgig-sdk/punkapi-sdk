# Punkapi SDK utility: make_context
require_relative '../core/context'
module PunkapiUtilities
  MakeContext = ->(ctxmap, basectx) {
    PunkapiContext.new(ctxmap, basectx)
  }
end
