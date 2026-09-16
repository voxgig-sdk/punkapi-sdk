# Punkapi SDK feature factory

from punkapi_sdk.feature.base_feature import PunkapiBaseFeature
from punkapi_sdk.feature.ratelimit_feature import PunkapiRatelimitFeature
from punkapi_sdk.feature.retry_feature import PunkapiRetryFeature
from punkapi_sdk.feature.test_feature import PunkapiTestFeature
from punkapi_sdk.feature.timeout_feature import PunkapiTimeoutFeature


_FEATURES = {
    "base": lambda: PunkapiBaseFeature(),
    "ratelimit": lambda: PunkapiRatelimitFeature(),
    "retry": lambda: PunkapiRetryFeature(),
    "test": lambda: PunkapiTestFeature(),
    "timeout": lambda: PunkapiTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
