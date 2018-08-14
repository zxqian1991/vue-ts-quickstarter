import { Injectable } from 'qzx-ioc';
@Injectable
export class RunHelper {
    runSync(
        num: number, 
        handler: (index: number) => void
    ) {
        for(let i = 0; i < num; i++) {
            handler(i);
        }
    }
    // 一步运行
    async run(
        num: number, 
        handler: (index: number) => void,
        onebyone: boolean = true
    ) {
        let runarr = [];
        for(let i = 0; i < num; i++) {
            if(onebyone) {
                await handler(i);
            } else {
                // 不是一个接一个
                runarr.push(handler(i));
            }
        }
        if(!onebyone) {
            await Promise.all(runarr);
        }
    }
    async generate<T>(
        num: number, 
        handler: (index: number) => T,
        onebyone: boolean = true;
    ) {
        let arr: T[] = [];
        let runarr = [];
        for(let i = 0; i < num; i++) {
            if(onebyone) {
                arr.push(await handler(i));
            } else {
                // 不是一个接一个
                runarr.push(handler(i));
            }
        }
        if(!onebyone) {
            return await Promise.all(runarr);
        } else {
            return arr;
        }
    }
    generateSync<T>(
        num: number, 
        handler: (index: number) => T
    ): T[] {
        let arr: T[]  = [];
        for(let i = 0; i < num; i++) {
           arr.push(handler(i));
        }
        return arr;
    }
}