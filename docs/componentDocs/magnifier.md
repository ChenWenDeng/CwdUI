# 商品放大镜
商品放大镜具备了商品放大镜功能，提供更加细致、清晰的商品查看体验。只需轻松点击或悬停于商品图片上，即可激活放大镜效果，能够仔细观察商品的每一个细节

### 示例：
<br />
<testMagnifier/>

### 代码：

```html
<template>
    <m-magnifier @success="picList"></m-magnifier>
</template>
```

```javascript 
picList:[
    'https://cbu01.alicdn.com/img/ibank/O1CN01kVF0Ad24SDV24KRJn_!!2215364407389-0-cib.jpg',
    'https://cbu01.alicdn.com/img/ibank/O1CN01ewmRsc24SDUwhKjXF_!!2215364407389-0-cib.jpg',
    'https://cbu01.alicdn.com/img/ibank/O1CN01b7AfhM24SDV5jJW7j_!!2215364407389-0-cib.jpg',
    'https://cbu01.alicdn.com/img/ibank/O1CN01dZ1KZG24SDV3p8BL0_!!2215364407389-0-cib.jpg',
    'https://cbu01.alicdn.com/img/ibank/O1CN01hLL8Ia1ZCPirv5HmL_!!2216605773158-0-cib.jpg'
]
```


## Attributes
|  参数  |  说明  |  类型  |  是否必要  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| picList | 图片数组 | Array |  true  | [] |
| width | 宽度大小 | Number |  false  | 500 |
| position | 小图位置，可设置在大图的上、下、左、右位置 | String |  false  | 底部 |
