<template>
    <div>
      <m-magnifier :picList="[
      'https://cbu01.alicdn.com/img/ibank/O1CN01kVF0Ad24SDV24KRJn_!!2215364407389-0-cib.jpg',
      'https://cbu01.alicdn.com/img/ibank/O1CN01ewmRsc24SDUwhKjXF_!!2215364407389-0-cib.jpg',
      'https://cbu01.alicdn.com/img/ibank/O1CN01b7AfhM24SDV5jJW7j_!!2215364407389-0-cib.jpg',
      'https://cbu01.alicdn.com/img/ibank/O1CN01dZ1KZG24SDV3p8BL0_!!2215364407389-0-cib.jpg',
      'https://cbu01.alicdn.com/img/ibank/O1CN01FANjij1DWBI8PpHOd_!!2207254780223-0-cib.jpg'
      ]"></m-magnifier>
    </div>
  </template>

<script>

export default {
  name: 'App',
  data(){
    return{
    }
  }
}
</script>
  
  <style lang="scss">
  @import './magnifier.scss';
  </style>