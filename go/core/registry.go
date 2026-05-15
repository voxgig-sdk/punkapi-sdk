package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewBeerEntityFunc func(client *PunkapiSDK, entopts map[string]any) PunkapiEntity

var NewImageEntityFunc func(client *PunkapiSDK, entopts map[string]any) PunkapiEntity

