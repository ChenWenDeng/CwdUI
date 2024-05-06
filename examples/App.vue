<template>
  <div id="app">
    <!-- <Demo/> -->
    <m-card
      imgSrc="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      summary="内容" 
    />
    <br>
    <m-card
      imgSrc="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      summary="内容" 
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">概要内容</div>
          <div class="price">概要内容</div>
        </div>
      </template>
    </m-card>
    <br>
    <m-card
      imgSrc="https://img0.baidu.com/it/u=236969658,3194311979&fm=253&fmt=auto&app=138&f=JPEG?w=1111&h=500"
      :width="370"
      :imgHeight="90"
    >
      内容
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">概要内容</div>
          <div class="level">概要内容</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199A1;
  margin-bottom: 8px;
}

.price {
  color: #F01414;
}

.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
