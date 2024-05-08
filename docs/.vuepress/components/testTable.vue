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
      tableData:[
          {  
            id: 1,  
            date: "2023-01-01",  
            name: "John Doe",  
            age: 30,  
            address: "123 Main St",  
            gender: "Male"  
        },  
        {  
            id: 2,  
            date: "2023-01-10",  
            name: "Jane Smith",  
            age: 25,  
            address: "456 Elm St",  
            gender: "Female"  
        },  
        {  
            id: 3,  
            date: "2023-02-05",  
            name: "Michael Johnson",  
            age: 40,  
            address: "789 Oak Ave",  
            gender: "Male"  
        },  
        {  
            id: 4,  
            date: "2023-02-20",  
            name: "Emily Davis",  
            age: 35,  
            address: "321 Pine St",  
            gender: "Female"  
        },  
        {  
            id: 5,  
            date: "2023-03-15",  
            name: "David Brown",  
            age: 50,  
            address: "987 Maple Rd",  
            gender: "Male"  
        },  
        {  
            id: 6,  
            date: "2023-04-01",  
            name: "Olivia Wilson",  
            age: 22,  
            address: "654 Apple St",  
            gender: "Female"  
        },  
        {  
            id: 7,  
            date: "2023-04-15",  
            name: "William Thompson",  
            age: 38,  
            address: "246 Cherry",  
            gender: "Male"  
        },  
        {  
            id: 8,  
            date: "2023-05-05",  
            name: "Sarah Miller",  
            age: 27,  
            address: "876 Lily Lane",  
            gender: "Female"  
        },  
        {  
            id: 9,  
            date: "2023-05-20",  
            name: "Robert Taylor",  
            age: 45,  
            address: "543 Rose Garden",  
            gender: "Male"  
        },  
        {  
            id: 10,  
            date: "2023-06-10",  
            name: "Emily Anderson",  
            age: 32,  
            address: "135 Daisy St",  
            gender: "Female"  
        },  
        {  
            id: 11,  
            date: "2023-06-25",  
            name: "Richard Martinez",  
            age: 55,  
            address: "258 Jasmine Ave",  
            gender: "Male"  
        },  
        {  
            id: 12,  
            date: "2023-07-10",  
            name: "Sophia Williams",  
            age: 29,  
            address: "369 Violet St",  
            gender: "Female"  
        },  
        {  
            id: 13,  
            date: "2023-07-25",  
            name: "Daniel Lee",  
            age: 42,  
            address: "472 Orchid Ave",  
            gender: "Male"  
        },  
        {  
            id: 14,  
            date: "2023-08-10",  
            name: "Emily Thompson",  
            age: 37,  
            address: "583 Sunflower St",  
            gender: "Female"  
        },  
        {  
            id: 15,  
            date: "2023-08-25",  
            name: "James Davis",  
            age: 52,  
            address: "691 Tulip Ave",  
            gender: "Male"  
        },  
        {  
            id: 16,  
            date: "2023-09-10",  
            name: "Olivia Davis",  
            age: 28,  
            address: "691 Tulip St",  
            gender: "Female"  
        },  
        {  
            id: 17,  
            date: "2023-09-20",  
            name: "Alexander Thompson",  
            age: 47,  
            address: "702 Daisy Ave",  
            gender: "Male"  
        },  
        {  
            id: 18,  
            date: "2023-09-30",  
            name: "Emma Watson",  
            age: 33,  
            address: "813 Hibiscus St",  
            gender: "Female"  
        },  
        {  
            id: 19,  
            date: "2023-10-10",  
            name: "Ethan Lee",  
            age: 49,  
            address: "924 Iris Ave",  
            gender: "Male"  
        },  
        {  
            id: 20,  
            date: "2023-10-20",  
            name: "Isabella Johnson",  
            age: 24,  
            address: "1035 Lily Blvd",  
            gender: "Female"  
        },  
        {  
            id: 21,  
            date: "2023-10-30",  
            name: "Zachary Anderson",  
            age: 39,  
            address: "1146 Magnolia St",  
            gender: "Male"  
        },  
        {  
            id: 22,  
            date: "2023-11-10",  
            name: "Mia Martinez",  
            age: 26,  
            address: "1257 Narcissus Ave",  
            gender: "Female"  
        },  
        {  
            id: 23,  
            date: "2023-11-20",  
            name: "Lucas Smith",  
            age: 43,  
            address: "1368 Orchid St",  
            gender: "Male"  
        } 
      ],
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