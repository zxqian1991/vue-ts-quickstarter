
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './pages';
import routes from './config/router';
Vue.use(VueRouter)
new Vue({
  el: '#app',
  router: new VueRouter({
    routes
  }),
  render: h => h(App)
});