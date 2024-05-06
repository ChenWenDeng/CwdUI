<template>
    <div class="modal" :class="modal?'modal-bg':''" v-if="isVisible">
      <div class="modal-content" :style="{width:width}">
        <header class="modal-header" :class="center?'modal-header-center':''">
            <div v-if="title" class="modal-title">{{title}}</div>
            <slot v-else name="header">默认标题</slot>
            <span class="close-icon" v-if="showClose" @click="close">x</span>
        </header>
        <main class="modal-body">
          <slot>默认内容</slot>
        </main>
        <footer class="modal-footer" :class="center?'modal-footer-center':''">
            <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </template>
   
  <script>
  export default {
    name: 'm-dialog',
    props: {
      isVisible:{
        type: Boolean,
        default: true
      },
      modal:{
        type: Boolean,
        default: true
      },
      center:{
        type: Boolean,
        default: false
      },
      showClose:{
        type: Boolean,
        default: true
      },
      title:{
        type: String,
        default: ''
      },
      width:{
        type: String,
        default: ''
      },
    },
    methods: {
        close() {
        this.$emit('close', false);
      }
    }
  };
  </script>