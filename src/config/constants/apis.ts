import { Injectable } from "qzx-ioc";
import { PathHelper } from '../../helpers/url';

@Injectable
export class ApisConstant {
    constructor(
        private $path_helper: PathHelper
    ) {

    }
    // 基准URL
    private baseUrl: string = '';
    getUrl(url: string, useBaseurl: boolean = true, baseUrl: string = this.baseUrl): string {
        if(!useBaseurl) return url;
        return this.$path_helper.joinPath(baseUrl, url);
    }
    INFO: string = this.getUrl('/LAKMDLKSMklm');
}