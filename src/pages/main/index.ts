import Vue from 'vue';
import Component from 'vue-class-component';
import * as Template from './index.html?style=./index.less';
@Template
@Component({})
export class App extends Vue {
    text : string = `# 正则表达式的实现

    
    
> 大家好，欢饮来到我们的前端世界，请问你们有什么需要帮助的吗？我们首先可以写些简单的公式:

\`\`\`bash
npm install -dd
\`\`\`

现在貌似什么都没有，

下面我要开始加粗了

**钱志祥**

下面我要倾斜了

*阿斯顿撒旦*

我加粗又倾斜

***加粗、倾斜***
|dsa|asdasd|
| :--: |--|
|asdas|adasd|
|asdas|adasd|
|asdas|adasd|
|asdas|adasd|
|asdas|adasd|
|asdas|adasd|

`;
    created() {}
    get html() {
        return this
            .text
            .replace(/(\#+)\ *(.*)(\n)?/gi, function (all, p1, p2, p3) {
                let num = p1.length >= 5
                    ? 5
                    : p1.length;
                return `<h${num}>${p2}</h${num}>`;
            })
            .replace(/(\|(\s*[^\|\s]*\s*\|)+\n)(\|(\ *\:?-+\:?\ *\|)+\n)((\|([^\|\s]*\|)+\n)*)/gi, function () {
                // .replace(/(\|([^\|\s]*\|)+\n)(\|(\ *\-+\ *\|)+\n)(\|([^\|\s]*\|)+\n?)/gi,
                // function() {
                let align = arguments[3]
                    .match(/[^\|\s]+/gi)
                    .map((str) => {
                        let isLeft = str[0] === ':';
                        let isRight = str[str.length - 1] === ':';
                        return (isLeft && isRight)
                            ? 'center'
                            : (isRight
                                ? 'right'
                                : 'left')
                    });
                let header = arguments[1].match(/[^\|\s]+/gi).reduce((temp, last, index) => {
                    if(index === 1) {
                        last = `<th class="${align[0]}">${last}</th>`;
                    }
                    last += `<th class="${align[index]}">${temp}</th>`;
                    return last;
                })
                let body = arguments[5].match(/\|([^\|\s]*\|)+\n/gi).map((str) => {
                    return '<tr>' + str.match(/[^\|\s]+/gi).reduce((temp, last, index) => {
                        if(index === 1) {
                            last = `<td class="${align[0]}">${last}</td>`;
                        }
                        last += `<td class="${align[index]}">${temp}</td>`;
                        return last;
                    }) + '</tr>'
                })
                return `<table>
                <thead>
                <tr>
                ${header}
                </tr>
                </thead>
                <tbody>
                ${body}
                </tbody>
                </table>`
            })
            .replace(/\>\ ([\s\S]+?)\n{2}/gi, `<div class='desc'>$1</div>`)
            .replace(/\`{3}(\w*)\n([\s\S]*)\`{3}\n?/gi, `<code>$2</code>`)
            .replace(/\`([^\`]+)\`/gi, `<span class='block-strong'>$1</span>`)
            .replace(/\*{2}([^\*\s]+)\*{2}/gi, '<b>$1</b>')
            .replace(/\*([^\*]+)\*/gi, `<i>$1</i>`)
            .replace(/\n/gi, '<br>')
    }
}