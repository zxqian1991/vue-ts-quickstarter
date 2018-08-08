import { Injectable } from "../../node_modules/qzx-ioc";
import { ColorService } from './colors';

@Injectable
export class MessageService {
    constructor(
        private $colorSvc: ColorService
    ) {

    }
    open(
        {
            img,
            msg
        }: {
            img?: string,
            msg?: string
        }
    ) {

    }
    info(msg: string) {
        return this.open({
            msg
        })   
    }
    succ(msg: string) {
        return this.open({
            msg
        })  
    }
    warn(msg: string) {
        return this.open({
            msg
        })  
    }
    error(msg: string) {
        return this.open({
            msg
        })  
    }
}