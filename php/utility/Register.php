<?php
declare(strict_types=1);

// Punkapi SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

PunkapiUtility::setRegistrar(function (PunkapiUtility $u): void {
    $u->clean = [PunkapiClean::class, 'call'];
    $u->done = [PunkapiDone::class, 'call'];
    $u->make_error = [PunkapiMakeError::class, 'call'];
    $u->feature_add = [PunkapiFeatureAdd::class, 'call'];
    $u->feature_hook = [PunkapiFeatureHook::class, 'call'];
    $u->feature_init = [PunkapiFeatureInit::class, 'call'];
    $u->fetcher = [PunkapiFetcher::class, 'call'];
    $u->make_fetch_def = [PunkapiMakeFetchDef::class, 'call'];
    $u->make_context = [PunkapiMakeContext::class, 'call'];
    $u->make_options = [PunkapiMakeOptions::class, 'call'];
    $u->make_request = [PunkapiMakeRequest::class, 'call'];
    $u->make_response = [PunkapiMakeResponse::class, 'call'];
    $u->make_result = [PunkapiMakeResult::class, 'call'];
    $u->make_point = [PunkapiMakePoint::class, 'call'];
    $u->make_spec = [PunkapiMakeSpec::class, 'call'];
    $u->make_url = [PunkapiMakeUrl::class, 'call'];
    $u->param = [PunkapiParam::class, 'call'];
    $u->prepare_auth = [PunkapiPrepareAuth::class, 'call'];
    $u->prepare_body = [PunkapiPrepareBody::class, 'call'];
    $u->prepare_headers = [PunkapiPrepareHeaders::class, 'call'];
    $u->prepare_method = [PunkapiPrepareMethod::class, 'call'];
    $u->prepare_params = [PunkapiPrepareParams::class, 'call'];
    $u->prepare_path = [PunkapiPreparePath::class, 'call'];
    $u->prepare_query = [PunkapiPrepareQuery::class, 'call'];
    $u->result_basic = [PunkapiResultBasic::class, 'call'];
    $u->result_body = [PunkapiResultBody::class, 'call'];
    $u->result_headers = [PunkapiResultHeaders::class, 'call'];
    $u->transform_request = [PunkapiTransformRequest::class, 'call'];
    $u->transform_response = [PunkapiTransformResponse::class, 'call'];
});
