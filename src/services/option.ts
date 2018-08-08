import { Injectable } from "qzx-ioc";
import { DynamicService } from './dynamic';

@Injectable
export class OptionService {
    constructor(
        private $dynamic_service: DynamicService
    ) {

    }
}
