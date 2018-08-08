export interface BasicDynamicService {
    open(param: {
        component: any,
        element: HTMLElement,
        data: any,
        events: any
    }):  DynamicInstance;
}
export interface DynamicInstance {
    destroy(): void;
}