<template>
    <div>
      <h1>双列表互动拖动排序</h1>
      <br>
      <m-drag :list="list" :list2="list2">
        <template v-slot:list="items"> 
          <div class="div-box" v-for="(val,index) in items" :key="index">
            {{ val.label  }}
          </div>
        </template>  
        <template v-slot:list2="items"> 
          <div class="div-box" v-for="(val,index) in items" :key="index">
            {{ val.label  }}
          </div>
        </template>  
      </m-drag>

      <hr>

      <h1 style="margin-top: 50px;">单列表拖动排序</h1>
      <m-drag :list="list4">
        <template v-slot:list="items"> 
          <div class="div-box" v-for="(val,index) in items" :key="index">
            {{ val.label  }}
          </div>
        </template>
      </m-drag>

      <hr>

      <div class="h-box">
        <m-drag :list="list3">
          <template v-slot:list="items"> 
            <div class="list-box" v-for="(val,index) in items" :key="index">
              {{ val.name  }}
            </div>
          </template>  
        </m-drag>
      </div>
    </div>
  </template>

<script>

export default {
  name: 'App',
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
      list4: [
        { id:1,label: '列表1' ,name:'name1' },
        { id:2,label: '列表2' ,name:'name2' },
        { id:3,label: '列表3' ,name:'name3' },
        { id:4,label: '列表4' ,name:'name4' },
        { id:5,label: '列表5' ,name:'name5' },
        { id:6,label: '列表6' ,name:'name6' },
      ], 
    }
  }
}
</script>
  
  <style lang="scss">
  @import './drag.scss';
  </style>