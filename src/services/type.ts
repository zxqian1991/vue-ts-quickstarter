import { Injectable } from "qzx-ioc";

@Injectable
export class TypeService {
    constructor() {

    }
    isNumber(val): boolean {
        return  typeof val === 'number' && !isNaN(val);
    }
    isString(val): boolean {
        return typeof val === 'string';
    }
    isObject(val): boolean {
        return typeof val === 'object' && !this.isArray(val);
    }
    isArray(val): boolean {
        return Array.isArray(val);
    }
}