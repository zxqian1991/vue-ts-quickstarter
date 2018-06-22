const fs = require('fs');
const path = require('path');
const argv = require('yargs')
    .options('module', {
        default: 'app',
        alias: 'm'
    })
    .argv;
(function (modulename) {
    // 替换主文件
    fs.writeFileSync(path.join(__dirname, '../../src/app.ts'), `
import Vue from 'vue'
import { App } from './pages/${modulename}/index'

new Vue({
  el: '#app',
  render: h => h(App)
});
    `);
    let directory_name = path.join(__dirname, `../../src/pages/${modulename}`);
    try {
        let state = fs.statSync(directory_name);
        if (!state.isDirectory()) {
            fs.rmdirSync(directory_name);
            initModule(directory_name);
        }
    } catch (e) {
        initModule(directory_name);
    }
    // 修改配置文件
    let webpackCommonConfig = require('../webpack.common');
    webpackCommonConfig.entry.style.push(`./src/pages/${modulename}/style.less`);
})(argv.module);
function initModule(directory_name) {
    // 新建文件夹
    fs.mkdirSync(directory_name);
    // 新建各种文件
    fs.writeFileSync(path.join(directory_name, 'index.ts'), `import Vue from 'vue';
import Component from 'vue-class-component';
import * as Template from './index.html?style=./index.less';

@Template
@Component({
    
})
export class App extends Vue {
    created() {

    }
}`);
    fs.writeFileSync(path.join(directory_name, 'index.html'), `<div></div>`);
    fs.writeFileSync(path.join(directory_name, 'index.less'), ``);
    fs.writeFileSync(path.join(directory_name, 'style.less'), ``);
}