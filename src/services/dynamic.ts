import { Injectable } from "qzx-ioc";
import { VueDynamicService } from './framework/vue/dynamic';

@Injectable
export class DynamicService {
    constructor(
        private $frame_dynamic: VueDynamicService
    ) {

    }
    open(
        {
            component,
            element = document.body,
            data = {},
            events = {}
        }: {
            component: any,
            element: HTMLElement,
            data: any,
            events: any
        }
    ) {
        return this.$frame_dynamic.open({
            component,
            element,
            data,
            events
        });
    }
}