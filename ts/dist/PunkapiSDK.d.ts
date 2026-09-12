import { BeerEntity } from './entity/BeerEntity';
import { ImageEntity } from './entity/ImageEntity';
export type * from './PunkapiTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { PunkapiEntityBase } from './PunkapiEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class PunkapiSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Beer(entopts?: Record<string, any>): BeerEntity;
    Image(entopts?: Record<string, any>): ImageEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): PunkapiSDK;
    tester(testopts?: any, sdkopts?: any): PunkapiSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof PunkapiSDK;
export { stdutil, config, BaseFeature, PunkapiEntityBase, PunkapiSDK, SDK, };
