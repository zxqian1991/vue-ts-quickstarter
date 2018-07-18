import Vue from 'vue';
import Component from 'vue-class-component';
import * as Template from './index.html?style=./index.less';

@Template
@Component({
    
})
export class App extends Vue {
    text: string = `> 曾经有一份方爱上你看的就看就 阿萨德撒 阿萨德 奥斯卡级的那款时间内 卡就是你的看今年

# 一级标题
## 一级标题
### 一级标题
####  一级标题
##### 一级标题
\`asdnaskjn\` \`asdmkalsdmkl\`

*倾斜*

**加粗**

***倾斜并加粗***

* akjsndjknaj
* asdsa asdas dasd
* ajsndasjnd
`;
    get html() {
        return transformMarkdown(this.text);
    }
    created() {

    }
}
function transformMarkdown(str: string): string {
    return str.replace(/^\s{0,3}\>\s+((.+\n?)+)(?=\n?)/gm, `<div class="description">$1</div>`)
    .replace(/^\s{0,3}(#{1,6})\s+(.*)/gm,  (all: string, g1: string, g2: string) => {
        return `<h${g1.length}>${g2}</h${g1.length}>`;
    })
    .replace(/(\*{2})(.*)\1/gm, `<b>$2</b>`)
    .replace(/\*(.*)\*/gm, `<i>$1</i>`)
    .replace(/\`(.*?)\`/gm,`<code>$1</code>`)
    .replace(/^[^\n\S]*$/gm, '<br/>')
    .replace(/^(.*)$/gm, `<div>$1</div>`)
    .replace(/\n/g,``)
}