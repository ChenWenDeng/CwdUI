# captcha验证码
为应用提供验证作用，验证码是防机器的,防止恶意破解密码、刷票、论坛灌水、刷页。有效的防止某个黑客以特定程序暴力破解的方式进行不断的登录尝试等...

### 示例：
<br />
<testCaptcha/>

### 代码：

```html
<template>
    <m-captcha :length="6" @success="onCaptchaSuccess"></m-captcha>
</template>
```


## Attributes
|  参数  |  说明  |  类型  |  是否必要  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| length  | 验证码的字符数量 | String |  false  | 4 |


## Events
|  事件名称  |  说明  |  回调参数  |
|  ----  |  ----  |  ----  |
| success  | success的回调，获取生成的验证码 | — |
