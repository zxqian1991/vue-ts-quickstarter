import { FlagHelper } from "../../vue-ts-helpers/flag";
import { Ioc } from '../../vue-ts-ioc';

const flag: FlagHelper = Ioc(FlagHelper);
// 所有的配置都可以从后台获取
flag.regist({
    name: 'production',
    state: true,
    desc: '开发环境的设置',
    date: '20180710',
    data: process.env.NODE_ENV === 'production'
});
flag.regist({
    name: 'net_pre_url',
    state: true,
    desc: '网络请求的URL前缀',
    date: '20180710',
    data: flag.getData('production') ? '' : 'http://localhost:3000'
});
flag.regist({
    name: 'show_tab',
    state: true,
    desc: '是否展示Tab',
    date: '20180710',
});