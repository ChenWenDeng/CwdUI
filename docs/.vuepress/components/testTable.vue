<template>
    <div>
      <!-- table表格 -->
      <m-table :headers="headers" :tableData="tableData" :checkVal="checkVal" :btnList="btnList"
          @get-selected="get_selected" @get-checkArr="get_checkArr">
      </m-table>
      <!-- table表格 -->
    </div>
  </template>

<script>
export default {
  name: 'App',
  data(){
    return{
      headers:['id','date','name','age','address','gender'],
      tableData:[],
      checkVal:'id',
      btnList:[
        {btn:'删除',style:{background:'#f56c6c',color:'#fff',border:'#f56c6c'},fun:(id,row)=>{
          //分别对应输出每条数据的id和当前每条数据，每条id的唯一表示可通过 checkVal 字段传入
          //可以根据返回输出的数据进行删除，编辑以及其他操作
          alert(`点击第${id}条数据 / 数据为：${JSON.stringify(row)}`)
          console.log(id,row)
        }},
        {btn:'编辑',style:{background:'#409eff',color:'#fff',border:'#409eff'},fun:(id,row)=>{
          alert(`点击第${id}条数据 / 数据为：${JSON.stringify(row)}`)
          console.log(id,row)
        }}
      ]  
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.tableData = this.generateObjectsArray(23);
    })
  },
  methods:{
    get_checkArr(val){
      console.log(val)
    },
    get_selected(val){
      console.log(val)
    },
    generateObjectsArray(numberOfItems){
      let currentId = 1; // 从1开始  
      // 创建一个空数组来存储对象  
      const dataArray = [];  
      // 循环生成数据  
      for (let i = 0; i < numberOfItems; i++) {  
          // 生成一个随机的name、age、address和gender  
          const name = `User ${Math.floor(Math.random() * 1000)}`; // 假设name是一个随机生成的字符串  
          const age = Math.floor(Math.random() * 100); // 假设age是一个0-99之间的随机整数  
          const address = `Street ${Math.floor(Math.random() * 100)}`; // 假设address是一个随机街道名  
          const gender = Math.random() < 0.5 ? 'Male' : 'Female'; // 假设gender是随机的男或女  
          // 生成一个正常的日期，这里我们使用当前日期加上一个随机的天数偏移  
          const today = new Date();  
          const daysToAdd = Math.floor(Math.random() * 30); // 假设日期偏移是0-29天  
          const date = new Date(today.setDate(today.getDate() + daysToAdd));  
          // 创建一个对象，并添加到数组中  
          const item = {  
              id: currentId++, // 递增的id  
              date: date.toISOString().slice(0, 10), // 转换为'YYYY-MM-DD'格式的字符串  
              name: name,  
              age: age,  
              address: address,  
              gender: gender  
          };  
          dataArray.push(item);  
      }  
      return dataArray
    }
  }
}
</script>
  
  <style lang="scss">
  @import './table.scss';
  </style>