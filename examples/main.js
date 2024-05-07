import Vue from 'vue'
import App from './App.vue'

// import '../components/css/index.scss'
// import API from '../components/lib/index'
// // console.log(API,'API')
// Vue.use(API.Card)
// Vue.use(API.Dialog)
// Vue.use(API.Captcha)

import 'cwd-ui/dist/css/index.css'
import CwdUI from "cwd-ui";
Vue.use(CwdUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
