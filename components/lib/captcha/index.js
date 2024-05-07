import Captcha from './src/main.vue'

// eslint-disable-next-line func-names
Captcha.install = function(Vue) {
  Vue.component(Captcha.name, Captcha)
}

export default Captcha