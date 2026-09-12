import { PunkapiEntityBase } from '../PunkapiEntityBase';
import type { PunkapiSDK } from '../PunkapiSDK';
import type { Control } from '../types';
import type { Image, ImageLoadMatch } from '../PunkapiTypes';
declare class ImageEntity extends PunkapiEntityBase<Image> {
    constructor(client: PunkapiSDK, entopts: any);
    make(this: ImageEntity): ImageEntity;
    load(this: any, reqmatch?: ImageLoadMatch, ctrl?: Control): Promise<ImageEntity>;
}
export { ImageEntity };
