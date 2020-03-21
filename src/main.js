import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import  Velocity from 'velocity-animate'
import {TweenMax} from 'gsap'
import ElementUI from 'element-ui';
import '../public/style/theme/index.css';
Vue.config.productionTip = false
axios.defaults.baseURL="/api";
Vue.prototype.$axios = axios ;
Vue.prototype.$TweenMax = TweenMax ;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

