import Table from './src/main.vue'

// eslint-disable-next-line func-names
Table.install = function(Vue) {
  Vue.component(Table.name, Table)
}

export default Table