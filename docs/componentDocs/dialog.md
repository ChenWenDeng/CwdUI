# Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

### 示例：
<br />
<testDialog/>

### 代码：

```html
<template>
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
</template>
```


## Attributes
|  参数  |  说明  |  类型  |  是否必要  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| is-visible  | 是否显示 Dialog | Boolean |  true  | true |
| width  | Dialog 的宽度 | String | false | 50% |
| title  | Dialog 的标题，也可通过具名 slot （见下表）传入 | String/Slot | false | — |
| modal  | 是否需要遮罩层 | Boolean | false | true |
| center  | 是否对头部和底部采用居中布局 | Boolean | false | false |
| show-close  | 是否显示关闭按钮 | Boolean | false | true |

## Slot
|  name  |  说明  |
|  ----  |  ----  |
|  —  | Dialog 的内容 |
| title  | Dialog 标题区的内容 |
| footer  | Dialog 按钮操作区的内容 |

## Events
|  事件名称  |  说明  |  回调参数  |
|  ----  |  ----  |  ----  |
| close  | Dialog 关闭的回调 | — |
