# drag拖动排序
可以单个列表拖动排序，也可以双列表互动拖动排序

### 示例：
<br />
<testDrag/>

### 代码：

```html
<template>
    <!--双列表-->
    <m-drag :list="list" :list2="list2">
      <template v-slot:list="items"> 
        <div class="div_box" v-for="(val,index) in items" :key="index">
          {{ val.label  }}
        </div>
      </template>  
      <template v-slot:list2="items"> 
        <div class="div_box" v-for="(val,index) in items" :key="index">
          {{ val.label  }}
        </div>
      </template>  
    </m-drag>

    <!--单列表-->
    <m-drag :list="list3">
        <template v-slot:list="items"> 
            <div class="div_box" v-for="(val,index) in items" :key="index">
            {{ val.label  }}
            </div>
        </template>  
    </m-drag>
</template>
```


```javascript  
<script>
export default {
  data(){
    return{
        list: [
            { id:1,label: '列表1' ,name:'name1' },
            { id:2,label: '列表2' ,name:'name2' },
            { id:3,label: '列表3' ,name:'name3' },
            { id:4,label: '列表4' ,name:'name4' },
            { id:5,label: '列表5' ,name:'name5' },
            { id:6,label: '列表6' ,name:'name6' },
        ], 
        list2: [
            { id:7,label: '列表7' ,name:'name7' },
            { id:8,label: '列表8' ,name:'name8' },
            { id:9,label: '列表9' ,name:'name9' },
            { id:10,label: '列表10' ,name:'name10' },
            { id:11,label: '列表11' ,name:'name11' },
            { id:12,label: '列表12' ,name:'name12' },
        ], 
        list3:[
            { id:13,label: '列表13' },
            { id:14,label: '列表14' },
            { id:15,label: '列表15' },
            { id:16,label: '列表16' },
            { id:17,label: '列表17' },
            { id:18,label: '列表18' },
        ]
    }
  },
}
</script>
```


## Attributes
|  参数  |  说明  |  类型  |  是否必要  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| list  | 拖动排序数据 | Array |  true  | — |
