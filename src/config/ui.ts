import { QButtonComponent } from '../components/button/index';
export const QUI = {
    install(Vue, options) {
        Vue.component('Button', QButtonComponent);
    }
}