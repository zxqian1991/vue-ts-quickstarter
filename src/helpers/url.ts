import { Injectable } from "qzx-ioc";

@Injectable
export class PathHelper {
    joinPath(path1: string = '', path2: string = '', ...paths: string[]) {
        if(!path1) {
            return this.joinPath.apply(this, [path2, ...paths]);
        }
        if(!path2) {
            if(!paths || paths.length <= 0) {
                return path1;
            } else {
                return this.joinPath.apply(this, [path1, ...paths])
            }
        }
        let temppath = path1.replace(/\/+$/gi, '') + path2.replace(/^\/*/gi, '/');
        return paths && paths.length > 0 ? this.joinPath.apply(this, [temppath, ...paths]) : temppath;
    }
    // 文件名
    basename(path: string, withext: boolean = false) {
        let arr = path.match(/[^\/\.]+(?=\.[^\.]*$)/gi);
        return arr && arr.length > 0 ? arr[0] : '';
    }
    // 后缀名
    extname(path: string) {
        let arr = path.match(/\.[^\.]*$/gi);
        return arr && arr.length > 0 ? arr[0] : '';
    }
    // 获取所在文件夹名称
    dirname(path: string) {
        return path.replace(/\/?[^\/\.]+(\.[^\.]*)?$/gi, '')
    }
}