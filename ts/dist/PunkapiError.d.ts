import { Context } from './Context';
declare class PunkapiError extends Error {
    isPunkapiError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { PunkapiError };
