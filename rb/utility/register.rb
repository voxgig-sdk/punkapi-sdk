# Punkapi SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

PunkapiUtility.registrar = ->(u) {
  u.clean = PunkapiUtilities::Clean
  u.done = PunkapiUtilities::Done
  u.make_error = PunkapiUtilities::MakeError
  u.feature_add = PunkapiUtilities::FeatureAdd
  u.feature_hook = PunkapiUtilities::FeatureHook
  u.feature_init = PunkapiUtilities::FeatureInit
  u.fetcher = PunkapiUtilities::Fetcher
  u.make_fetch_def = PunkapiUtilities::MakeFetchDef
  u.make_context = PunkapiUtilities::MakeContext
  u.make_options = PunkapiUtilities::MakeOptions
  u.make_request = PunkapiUtilities::MakeRequest
  u.make_response = PunkapiUtilities::MakeResponse
  u.make_result = PunkapiUtilities::MakeResult
  u.make_point = PunkapiUtilities::MakePoint
  u.make_spec = PunkapiUtilities::MakeSpec
  u.make_url = PunkapiUtilities::MakeUrl
  u.param = PunkapiUtilities::Param
  u.prepare_auth = PunkapiUtilities::PrepareAuth
  u.prepare_body = PunkapiUtilities::PrepareBody
  u.prepare_headers = PunkapiUtilities::PrepareHeaders
  u.prepare_method = PunkapiUtilities::PrepareMethod
  u.prepare_params = PunkapiUtilities::PrepareParams
  u.prepare_path = PunkapiUtilities::PreparePath
  u.prepare_query = PunkapiUtilities::PrepareQuery
  u.result_basic = PunkapiUtilities::ResultBasic
  u.result_body = PunkapiUtilities::ResultBody
  u.result_headers = PunkapiUtilities::ResultHeaders
  u.transform_request = PunkapiUtilities::TransformRequest
  u.transform_response = PunkapiUtilities::TransformResponse
}
