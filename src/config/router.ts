import { Injectable, Ioc } from 'qzx-ioc';
import { ColorConfig } from './color';
export default [
    {
        path: '/',
        component: (resolve) => (require as any)(['../pages/main'], resolve)
    }, {
        path: '/test',
        component: (resolve) => (require as any)(['../pages/test'], resolve)
    }
]