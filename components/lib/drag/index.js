import Drag from './src/main.vue'

// eslint-disable-next-line func-names
Drag.install = function(Vue) {
  Vue.component(Drag.name, Drag)
}

export default Drag