# Table 表格
用于展示多条结构类似的数据，可对数据进行勾选，分页以及分页后返回当前页码也任然保持勾选高亮状态或其他自定义操作。

### 示例：
<br />
<testTable />

### 代码：

```html
<template>
    <m-table :headers="headers" :tableData="tableData" :checkVal="checkVal" :btnList="btnList"
        @get-selected="get_selected" @get-checkArr="get_checkArr">
    </m-table>
</template>
```

```javascript  
<script>
export default {
  data(){
    return{
      headers:['id','date','name','age','address','gender'],
      tableData:[],
      checkVal:'id',
      btnList:[
        {btn:'删除',style:{background:'#f56c6c',color:'#fff',border:'#f56c6c'},fun:(id,row)=>{
          //分别对应输出每条数据的id和当前每条数据，每条id的唯一表示可通过 checkVal 字段传入
          //可以根据返回输出的数据进行删除，编辑以及其他操作
          console.log(id,row)
        }},
        {btn:'编辑',style:{background:'#409eff',color:'#fff',border:'#409eff'},fun:(id,row)=>{
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
      console.log(val) //输出：例如：[{id:1,name:'张三'}，{id:2,name:'李四'}...]
    },
    get_selected(val){
      console.log(val) //输出：例如：[1，2，3...]数组里面的是每条数据的唯一标识，例如id,可通过checkVal 字段传如字段
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
```


## Attributes
|  参数  |  说明  |  类型  |  是否必要  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| headers  | 表格头部标题集合 | Array |  true  | — |
| tableData  | 表格列表数据集合 | Array |  true  | — |
| checkVal  | 每条数据唯一标识，例如：id | String |  false  | id |
| btnList  | 每条数据操作按钮，配置style属性可对按钮样式进行修改，配置fun方法可以接收按钮的点击回调 | Array |  false  | — |


## Events
|  事件名称  |  说明  |  回调参数  |
|  ----  |  ----  |  ----  |
| get-selected  | 勾选每条数据的回调，传参返回数组，数组中是每条数据的唯一标识,例如id | [1,2,3...] |
| get-checkArr  | 勾选每条数据的回调，传参返回数组，数组中是每条数据 | [{id:1,name:张三},{id:1,name:张三}...] |
