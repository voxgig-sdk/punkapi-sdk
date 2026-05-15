package core

type PunkapiError struct {
	IsPunkapiError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewPunkapiError(code string, msg string, ctx *Context) *PunkapiError {
	return &PunkapiError{
		IsPunkapiError: true,
		Sdk:              "Punkapi",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *PunkapiError) Error() string {
	return e.Msg
}
