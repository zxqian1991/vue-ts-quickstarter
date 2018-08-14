import { Injectable } from "qzx-ioc";

@Injectable
export class TipsService {
    constructor(
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