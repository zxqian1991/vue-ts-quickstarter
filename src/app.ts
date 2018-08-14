
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './pages';
import routes from './config/router';
import { QUI } from './config/ui';
Vue.use(VueRouter)
Vue.use(QUI);
new Vue({
  el: '#app',
  router: new VueRouter({
    routes
  }),
  render: h => h(App)
});