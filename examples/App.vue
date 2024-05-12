<template>
  <div id="app">

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

    <!-- table表格 -->
    <m-table :headers="headers" :tableData="tableData" :checkVal="checkVal" :btnList="btnList"
        @get-selected="get_selected" @get-checkArr="get_checkArr">
    </m-table>
    <!-- table表格 -->

    <!-- 验证码 -->
    <m-captcha @success="onCaptchaSuccess"></m-captcha>
    <!-- 验证码 -->

    <!-- dialog模态框 -->
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
    <!-- dialog模态框 -->

    <!-- <Demo/> -->

    <!-- card卡片 -->
    <m-card
      imgSrc="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      summary="内容" 
    />
    <br>
    <m-card
      imgSrc="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      summary="内容" 
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">概要内容</div>
          <div class="price">概要内容</div>
        </div>
      </template>
    </m-card>
    <br>
    <m-card
      imgSrc="https://img0.baidu.com/it/u=236969658,3194311979&fm=253&fmt=auto&app=138&f=JPEG?w=1111&h=500"
      :width="370"
      :imgHeight="90"
    >
      内容
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">概要内容</div>
          <div class="level">概要内容</div>
        </div>
      </template>
    </m-card>
    <!-- card卡片 -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      showModal: false,
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
      ],
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
    }
  },
  mounted(){
    this.tableData = this.generateObjectsArray(23);
  },
  methods:{
    cl1(){
      console.log(this.list,'list')
      console.log(this.list2,'list2')
    },
    get_checkArr(val){
      console.log(val)
    },
    get_selected(val){
      console.log(val)
    },
    onCaptchaSuccess(captchaText) {
      console.log('验证码输入成功:', captchaText);
      // 验证验证码是否正确
    },
    close(){
      this.showModal = false
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199A1;
  margin-bottom: 8px;
}

.price {
  color: #F01414;
}

.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
.div_box{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
</style>