<template>
  <div class="captcha-container">
    <canvas ref="canvas" @click="generateCaptcha"></canvas>
    <button @click="reloadCaptcha">看不清，换一个</button>
  </div>
</template>

<script>
export default {
  name: 'm-captcha',
  props: {
    // 验证码的字符数量
    length: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      chars: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      captchaText: ''
    };
  },
  mounted() {
    this.generateCaptcha();
  },
  methods: {
    generateCaptcha() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');
      const w = canvas.width = this.length*23;
      const h = canvas.height = 40;
      ctx.fillStyle = '#f3f3f3';
      ctx.fillRect(0, 0, w, h);
      this.captchaText = '';
      for (let i = 0; i < this.length; i++) {
        const text = this.chars[Math.floor(Math.random() * this.chars.length)];
        this.captchaText += text;
        ctx.font = '20px Arial';
        ctx.fillStyle = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
        ctx.fillText(text, 10 + i * 20, 27);
      }
      // 验证码验证通过后，可以通过事件通知父组件
      this.$emit('success', this.captchaText);
    },
    reloadCaptcha() {
      this.generateCaptcha();
    }
  }
};
</script>