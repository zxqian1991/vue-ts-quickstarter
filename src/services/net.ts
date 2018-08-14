import { ConstantConfig } from './../config/constants/index';
import { Injectable } from "qzx-ioc";
import axios, { AxiosResponse } from 'axios';
import { NetStatusObject } from '../interfaces/NetStatusObject';
import { TypeHelper } from '../helpers/type';
@Injectable
export class NetService {
    constructor(
        private $type: TypeHelper,
        private $constant: ConstantConfig
    ) {

    }
    private isNetStatusObject(data: any) {
        // 不存在或者不是纯的对象格式
        return data && this.$type.isObject(data) && data.hasOwnProperty('succ');
    }
    private handleAxiosData<T, K>(data: AxiosResponse<NetStatusObject<T>>, transform: (data: T) => K) {
        return new Promise((resolve, reject) => {
            if(this.isNetStatusObject(data.data)) {
                if(data.data.succ) {
                    resolve(transform(data.data.data))
                } else {
                    reject(data.data.msg);
                }
            } else {
                resolve(data.data);
            }
        }).then((data: K) => {
            return data;
        })
    }
    private async handleAxios<T, K>(promise: Promise<AxiosResponse<NetStatusObject<T>>>, transform: (data: T) => K) {
        new Promise((resolve ,reject) => {
            promise.then((data: AxiosResponse<NetStatusObject<T>>) => {
                this.handleAxiosData<T, K>(data, transform)
                .then((data) => {
                    resolve(data)
                })
                .catch((e) => {
                    reject(e);
                })
            })
            .catch((e) => {
                reject(e);
            })
        }).then((data: K) => {
            return data;
        })
    }
    async get<T, K>({
        url,
        params = {},
        transform = data => (data as any)
    }: {
        url: string,
        params: any,
        transform: (data: T) => K
    }) {
        return await this.handleAxios(axios.get(url, {params: params}), transform);
    }
    async post<T, K>({
        url,
        data = {},
        transform = data => (data as any)
    }: {
        url: string,
        data: any,
        transform: (data: T) => K
    }) {
        return await this.handleAxios(axios.post(url, data), transform);
    }
}