<template>
    <div>
      <h1>双列表互动拖动排序</h1>
      <br>
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

      <hr>

      <h1 style="margin-top: 50px;">单列表拖动排序</h1>
      <m-drag :list="list3">
        <template v-slot:list="items"> 
          <div class="div_box" v-for="(val,index) in items" :key="index">
            {{ val.label  }}
          </div>
        </template>  
      </m-drag>
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
      list3:[
        { id:13,label: '列表13' },
        { id:14,label: '列表14' },
        { id:15,label: '列表15' },
        { id:16,label: '列表16' },
        { id:17,label: '列表17' },
        { id:18,label: '列表18' },
      ], 
    }
  }
}
</script>
  
  <style lang="scss">
  @import './drag.scss';
  </style>