import { ApisConstant } from './apis';
import { Injectable } from "qzx-ioc";

@Injectable
export class ConstantConfig {
    constructor(
        public apis: ApisConstant
    ) {

    }
}