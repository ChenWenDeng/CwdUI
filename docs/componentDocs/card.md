# Card
卡片组件

### 示例：
<br />
<testCard/>

### 代码：

```html
<template>
  <m-card
    imgSrc="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
    summary="内容" 
  />
</template>
```

## Attributes
|  参数  |  说明  |  类型  |  是否必要  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| width  | 卡片宽度 | Number |  false  | - |
| imgSrc  | 图片资源地址 | String | true | - |
| imgHeight  | 图片高度 | String | false | - |
| summary  | 卡片概述 | String/Slot | false | - |
| footer  | 卡片底部 | Slot | false | - |