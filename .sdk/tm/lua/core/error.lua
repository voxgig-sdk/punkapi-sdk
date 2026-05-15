-- Punkapi SDK error

local PunkapiError = {}
PunkapiError.__index = PunkapiError


function PunkapiError.new(code, msg, ctx)
  local self = setmetatable({}, PunkapiError)
  self.is_sdk_error = true
  self.sdk = "Punkapi"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function PunkapiError:error()
  return self.msg
end


function PunkapiError:__tostring()
  return self.msg
end


return PunkapiError
