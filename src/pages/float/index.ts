import Vue from 'vue';
import Component from 'vue-class-component';
import * as Template from './index.html?style=./index.less';

@Template
@Component({
    
})
export class App extends Vue {
    created() {
        var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");
        let img = document.createElement('img');
        img.setAttribute('src', 'http://dl.app.gtja.com/public/aceweb/img/small/logo.jpg');
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage( img, 0, 0 );
            document.body.appendChild(canvas);
        }
    }
}