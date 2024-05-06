<template>
    <div>
        <m-dialog :is-visible="showModal"
        title="提示"
        @close="close">
        <template v-slot:header>
            自定义标题
        </template>
            自定义内容
        <span slot="footer" class="dialog-footer">
            <button @click="showModal = false">取 消</button>
            <button @click="showModal=false">确 定</button>
        </span>
        </m-dialog>
        <button @click="showModal = true">点击打开dialog</button>
    </div>
  </template>

<script>

export default {
  name: 'App',
  data(){
    return{
      showModal: false
    }
  },
  methods:{
    close(){
      this.showModal = false
    }
  }
}
</script>
  
  <style lang="scss">
  @import './dialog.scss';
  </style>