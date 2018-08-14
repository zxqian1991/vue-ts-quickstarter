import { TypeHelper } from './type';
import { Injectable } from 'qzx-ioc';
@Injectable
export class MergeHelper {
    constructor(
        private $type_helper: TypeHelper
    ) {

    }
    mergeLight(...objects: Object[]) {
        let obj = objects[0];
        if(objects && objects.length > 0) {
            for(let i = 1; i < objects.length; i++) {
                for(let key in objects[i]) {
                    obj[key] = objects[i][key];
                }
            }
        }
        return obj;
    }
    // 合并的过程中需要注意循环引用
    mergeDeep({
        objects,
        sourceMap
    }: {
        objects: Object[],
        sourceMap?: Map<any, any>
    }) {
        let isMostout = !sourceMap;
        if(isMostout) {
            sourceMap = new Map();
        }
        let obj = objects[0];
        if(objects && objects.length > 0) {
            for(let i = 1; i < objects.length; i++) {
                for(let key in objects[i]) {
                    let val = objects[i][key];
                    // 不是对象 直接赋值、覆盖
                    if(!this.$type_helper.isArrayOrObject(val)) {
                        obj[key] = val;
                    } else {
                        // 是对象，那就得做特殊的处理
                        // 不过，首先还是先看看，之前有没有这个对象的引用，毕竟是存在循环引用的
                        if(!sourceMap.has(val)) {
                            // 不存在循环引用，那就开心了，直接走你
                            let temp = !this.$type_helper.isArrayOrObject(obj[key]) ? (this.$type_helper.isArray(val) ? [] : {}) : obj[key];
                            // 别忘了吧这个val加到map里面，防止别的地方引用
                            sourceMap.set(val, temp);
                            obj[key] = this.mergeDeep({
                                objects: [temp, val],
                                sourceMap
                            });
                        } else {
                            // 发现有一样的，这个更加简单了，指针指向就行了
                            obj[key] = sourceMap.get(val);
                        }
                    }
                }
            }
        }
        if(isMostout) {
            // 别忘了删除引用，防止内存泄漏
            sourceMap.forEach((key) => {
                sourceMap.delete(key);
            })
        }
        return obj;
    }
    // 浅复制
    cloneLight(target) {
        return this.mergeLight({}, target);
    }
    // 深度复制
    cloneDeep(target) {
        return this.mergeDeep({
            objects: [{}, target]
        });
    }
}