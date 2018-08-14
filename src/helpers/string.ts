import { Injectable } from 'qzx-ioc';
@Injectable
export class StringHelper {
    capital(str: string) {
        if(!str) return '';
        return str[0].toUpperCase() + str.substr(1);
    }
}