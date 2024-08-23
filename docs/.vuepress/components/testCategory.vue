<template>
    <div>
      <m-category :category="category" @parent_click="parent_click" @child_click="child_click"></m-category>
    </div>
  </template>

<script>

export default {
  name: 'App',
  data(){
    return{
      category:[]
    }
  },
  mounted(){
    this.category = this.get_generateCategoryData(10)
  },
  methods:{
    parent_click(val){
      alert(JSON.stringify(val))
    },
    child_click(val){
      alert(JSON.stringify(val))
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
        
      function generateChildLevels(minCount = 20) {  
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
        while (childLevels.length < 20) {  
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
  
  <style lang="scss">
  @import './category.scss';
  </style>