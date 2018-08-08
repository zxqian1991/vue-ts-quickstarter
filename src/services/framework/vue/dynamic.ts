import { Injectable } from "../../../../node_modules/qzx-ioc";
import { BasicDynamicService, DynamicInstance } from '../basic/interfaces/dynamic';
import Vue, { VueConstructor } from '../../../../node_modules/vue';

@Injectable
export class VueDynamicService implements BasicDynamicService{
    open({
        element,
        component,
        data = {},
        events = {}
    }: {
        element: HTMLElement,
        component: any,
        data: any,
        events: any
    }): DynamicInstance {
        let com: VueConstructor<Record<never, any> & Vue> = Vue.extend(component);
        let instance = new com({
            propsData: data,
        })
        for(let i in events) {
            if(typeof events[i] === 'function') {
                instance.$on(i, events[i]);
            }
        }
        let mount = instance.$mount();
        element.appendChild(mount.$el);
        return {
            destroy() {
                instance.$destroy();
                let ele = instance.$el;
                if(ele.remove) {
                    ele.remove();
                } else {
                    if(ele.parentNode) {
                        ele.parentNode.removeChild(ele);
                    }
                }
            }
        }
    }
}