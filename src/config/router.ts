import { Injectable, Ioc } from 'qzx-ioc';
export default [
    {
        path: '/',
        component: (resolve) => (require as any)(['../pages/main'], resolve)
    }, {
        path: '/test',
        component: (resolve) => (require as any)(['../pages/test'], resolve)
    }
]