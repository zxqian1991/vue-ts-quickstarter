import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator'
import * as Template from './index.html?style=./index.less';
@Template
@Component({
    
})
export class QButtonComponent extends Vue {
    created() {

    }
    @Prop({
        default: false
    }) disabled: boolean;
    @Prop() icon: string;
    @Prop({
        default: 'info'
    }) type: string;
    get  typeClass() {
        return `btn-${this.type}`
    }
    // 根据主题获取主题
}