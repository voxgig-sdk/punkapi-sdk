package = "voxgig-sdk-punkapi"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/punkapi-sdk.git"
}
description = {
  summary = "Punkapi SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["punkapi_sdk"] = "punkapi_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
