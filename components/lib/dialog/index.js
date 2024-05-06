import Dialog from './src/main.vue'

// eslint-disable-next-line func-names
Dialog.install = function(Vue) {
  Vue.component(Dialog.name, Dialog)
}

export default Dialog