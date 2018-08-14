import { Injectable } from 'qzx-ioc';

@Injectable
export class ColorConfig {
    default: string = `#238AF4`;
    success: string = `#00BF68`;
    warn: string = `#FF9A00`;
    error: string = `#EF3E00`;
}