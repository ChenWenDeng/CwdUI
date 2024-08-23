import Magnifier from './src/main.vue'

// eslint-disable-next-line func-names
Magnifier.install = function(Vue) {
  Vue.component(Magnifier.name, Magnifier)
}

export default Magnifier