import { PunkapiEntityBase } from '../PunkapiEntityBase';
import type { PunkapiSDK } from '../PunkapiSDK';
import type { Control } from '../types';
import type { Beer, BeerLoadMatch, BeerListMatch } from '../PunkapiTypes';
declare class BeerEntity extends PunkapiEntityBase<Beer> {
    constructor(client: PunkapiSDK, entopts: any);
    make(this: BeerEntity): BeerEntity;
    load(this: any, reqmatch?: BeerLoadMatch, ctrl?: Control): Promise<BeerEntity>;
    list(this: any, reqmatch?: BeerListMatch, ctrl?: Control): Promise<BeerEntity[]>;
}
export { BeerEntity };
