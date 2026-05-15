# ProjectName SDK exists test

import pytest
from punkapi_sdk import PunkapiSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = PunkapiSDK.test(None, None)
        assert testsdk is not None
