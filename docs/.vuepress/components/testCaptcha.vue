<template>
    <div>
      <m-captcha :length="6" @success="onCaptchaSuccess"></m-captcha>
    </div>
  </template>

<script>

export default {
  name: 'App',
  data(){
    return{
      length: 5
    }
  },
  methods:{
    onCaptchaSuccess(captchaText){
      console.log(`验证码是：${captchaText}`)
    }
  }
}
</script>
  
  <style lang="scss">
  @import './captcha.scss';
  </style>