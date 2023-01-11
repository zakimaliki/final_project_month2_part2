import Vue from 'vue';
import App from './App.vue';
import { routes } from '../src/router';
import VueResourse from 'vue-resource'
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
Vue.use(VueResourse);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
