import Category from './src/main.vue'

// eslint-disable-next-line func-names
Category.install = function(Vue) {
  Vue.component(Category.name, Category)
}

export default Category