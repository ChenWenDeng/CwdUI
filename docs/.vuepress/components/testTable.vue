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
    this.tableData = this.generateObjectsArray(23);
  },
  methods:{
    get_checkArr(val){
      console.log(val)
    },
    get_selected(val){
      console.log(val)
    },
    generateObjectsArray(n) {
      const objectsArray = [];
      const currentDate = new Date();

      for (let i = 1; i <= n; i++) {
        const date = new Date(currentDate.getTime() - (n - i) * 24 * 60 * 60 * 1000); // 从当前时间往前推，每天一个日期
        objectsArray.push({
          id: i,
          date: date.toLocaleDateString(), // 转换为本地可读的日期格式
          name: `Name${i}`,
          age: Math.floor(Math.random() * 90) + 1, // 1到90岁之间的随机年龄
          address: `Address ${i} Street, City ${i}`,
          gender: ['Male', 'Female'][Math.floor(Math.random() * 2)] // 随机生成性别
        });
      }
      return objectsArray;
    }
  }
}
</script>
  
  <style lang="scss">
  @import './table.scss';
  </style>