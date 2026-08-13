# Punkapi SDK feature factory

from punkapi_sdk.feature.base_feature import PunkapiBaseFeature
from punkapi_sdk.feature.test_feature import PunkapiTestFeature


def _make_feature(name):
    features = {
        "base": lambda: PunkapiBaseFeature(),
        "test": lambda: PunkapiTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
