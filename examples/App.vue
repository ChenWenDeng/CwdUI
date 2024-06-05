<template>
  <div id="app">
    <m-category :category="category" @parent_click="parent_click" @child_click="child_click"></m-category>
    <!-- 拖动排序 -->
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

    <div class="h-box">
      <m-drag :list="list3">
        <template v-slot:list="items"> 
          <div class="list-box" v-for="(val,index) in items" :key="index">
            {{ val.name  }}
          </div>
        </template>  
      </m-drag>
    </div>
    <!-- 拖动排序 -->

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
      category:[]
    }
  },
  mounted(){
    this.tableData = this.generateObjectsArray(23);
    this.category = this.get_generateCategoryData(10)
  },
  methods:{
    parent_click(val){
      alert(JSON.stringify(val))
    },
    child_click(val){
      alert(JSON.stringify(val))
    },
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
    },
    get_generateCategoryData(num){
      function generateRandomLabel() {  
        const adjectives = ['智能', '时尚', '高速', '便携', '豪华', '经典', '创新', '环保', '顶级', '科技'];  
        const nouns = ['手机', '电脑', '电视', '相机', '平板', '路由器', '洗衣机', '空调', '冰箱', '音响', '服务', '应用', '系统', '软件', '游戏', '配件', '超市', '书店', '餐厅', '旅行'];  
        const indexAdj = Math.floor(Math.random() * adjectives.length);  
        const indexNoun = Math.floor(Math.random() * nouns.length);  
        return adjectives[indexAdj] + nouns[indexNoun];  
      }  
        
      function generateUniqueId() {  
        return Math.floor(1000 + Math.random() * 9000).toString(); // 生成一个四位的唯一ID  
      }  
        
      function generateRandomValue() {  
        return (Math.floor(1000 + Math.random() * 9000)).toString().padStart(4, '0'); // 生成一个四位数的随机value  
      }  
        
      function generateChildLevels(minCount = 30) {  
        const childLevels = [];  
        while (childLevels.length < minCount) {  
          const uniqueValue = generateRandomValue();  
          const exists = childLevels.some(child => child.value === uniqueValue);  
          if (!exists) {  
            childLevels.push({  
              label: generateRandomLabel(),  
              value: uniqueValue,  
            });  
          }  
        }  
        // 确保child_level至少有20个条目  
        while (childLevels.length < 30) {  
          childLevels.push({  
            label: generateRandomLabel(),  
            value: generateRandomValue(),  
          });  
        }  
        return childLevels;  
      }  
        
      function generateParentLevels(count) {  
        const parentLevels = [];  
        while (parentLevels.length < count) {  
          const uniqueValue = generateRandomValue();  
          const exists = parentLevels.some(parent => parent.value === uniqueValue);  
          if (!exists) {  
            parentLevels.push({  
              label: generateRandomLabel(),  
              value: uniqueValue,  
              child_level: generateChildLevels(),  
            });  
          }  
        }  
        return parentLevels;  
      }  
        
      function generateCategory() {  
        return {  
          parent_level: generateParentLevels(2), // 每个category有4个parent_level  
          id: generateUniqueId(),  
        };  
      }  
        
      function generateCategoryData(count) {  
        const data = [];  
        for (let i = 0; i < count; i++) {  
          data.push(generateCategory());  
        }  
        return data;  
      }  
        
      const categories = generateCategoryData(num);  
      return categories
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
</style>

<style lang="scss">
.d-box{
  display: flex;
  flex-wrap: wrap;
  .t-box{
    margin: 0 20px;
    .list{
      padding: 0;
      .list-item{
        margin: 10px 0;
        height: 30px;
      }
    }
  }
}
.div-box{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3eaf7c;
  width: 300px;
  border-radius: 5px;
  color: #fff;
}
.h-box{
  .list{
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }
  .list-item{
    margin: 5px !important;
    height: 50px !important;
  }
  .list-box{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    background: #3eaf7c;
    color: #fff;
  }
}
</style>