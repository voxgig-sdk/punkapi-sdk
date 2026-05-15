# Punkapi SDK utility: make_context

from core.context import PunkapiContext


def make_context_util(ctxmap, basectx):
    return PunkapiContext(ctxmap, basectx)
