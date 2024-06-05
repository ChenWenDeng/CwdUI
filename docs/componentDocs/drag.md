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
    <m-drag :list="list">
        <template v-slot:list="items"> 
            <div class="div_box" v-for="(val,index) in items" :key="index">
            {{ val.label  }}
            </div>
        </template>  
    </m-drag>

    <m-drag :list="list3">
      <template v-slot:list="items"> 
        <div class="list-box" v-for="(val,index) in items" :key="index">
          {{ val.name  }}
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
        list3: [
          { id:1,name: '第1个' , },
          { id:2,name: '第2个' , },
          { id:3,name: '第3个' , },
          { id:4,name: '第4个' , },
          { id:5,name: '第5个' , },
          { id:6,name: '第6个' , },
          { id:7,name: '第7个' , },
          { id:8,name: '第8个' , },
          { id:9,name: '第9个' , },
          { id:10,name: '第10个' , },
          { id:11,name: '第11个' , },
          { id:12,name: '第12个' , },
          { id:13,name: '第13个'  },
          { id:14,name: '第14个'  },
          { id:15,name: '第15个'  },
          { id:16,name: '第16个'  },
          { id:17,name: '第17个'  },
          { id:18,name: '第18个'  },
          { id:19,name: '第19个'  },
          { id:20,name: '第20个'  },
        ], 
    }
  },
}
</script>
```


## Attributes
|  参数  |  说明  |  类型  |  是否必要  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| list  | 传入拖动排序数据，可以直接获取拖动排序后的list数据 | Array |  true  | — |
