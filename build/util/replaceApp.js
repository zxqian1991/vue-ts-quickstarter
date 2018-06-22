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
    // 修改配置文件
    let webpackCommonConfig = require('../webpack.common');
    webpackCommonConfig.entry.style.push(`./src/pages/${modulename}/style.less`);
})(argv.module);