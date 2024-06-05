<template>
  <div class="category-container" id="test">
    <ul class="category-ul" @mouseleave="handleMouseleave">
      <li class="category-li"
        v-for="(item, index) in category" :key="index"
        @mouseover="handleMouseover($event,item.id,1)">
        <span class="parent-span" v-for="(val, inds) in item.parent_level" :key="inds" @click="parent_click(val)">
          {{ val.label }}
        </span>
      </li>
    </ul>
    <ul class="category-content-ul" v-if="isShow" 
    @mouseover="handleMouseover($event,current_category.id,2)"  
    @mouseleave="handleMouseleave">
      <li class="category-content-li" v-for="(item, index) in current_category.parent_level" :key="index">
        <div class="category-content-title">{{ item.label }} ></div>
        <div class="category-content-val-box">
          <div class="category-content-val" v-for="(val,inds) in item.child_level" :key="inds" @click="child_click(val)">
            {{ val.label }}
          </div>
        </div>
      </li>
    </ul>
    <div class="cen-box">
      其他内容:<br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam consequatur temporibus ullam voluptate in soluta quo? Veritatis aliquid culpa iusto beatae alias reiciendis harum sint aut rerum, accusamus magni?
    </div>
  </div>
</template>

<script>
export default {
  name: "m-category",
  props: {
    category:{
      type:Array,
      default:() => []
    },
  },
  data(){
    return{
      isShow:false,
      time:null,
      // category: [
      //   {
      //     parent_level:[
      //       {
      //         label:'手机',
      //         value:'1001',
      //         child_level:[
      //           {
      //             label:'华为',
      //             value:'001',
      //           },
      //           {
      //             label:'华为',
      //             value:'002',
      //           },
      //           {
      //             label:'金立',
      //             value:'003',
      //           }
      //         ]
      //       },
      //       {
      //         label:'运营商',
      //         value:'1002',
      //         child_level:[
      //           {
      //             label:'合约机',
      //             value:'001',
      //           },
      //           {
      //             label:'手机卡',
      //             value:'002',
      //           },
      //           {
      //             label:'充话费/流量',
      //             value:'003',
      //           },
      //           {
      //             label:'中国电信',
      //             value:'004',
      //           },
      //           {
      //             label:'中国移动',
      //             value:'005',
      //           },
      //           {
      //             label:'中国联通',
      //             value:'006',
      //           }
      //         ]
      //       }
      //     ],
      //     id: "10983",
      //   }
      // ],
      current_category:[]
    }
  },
  mounted: function () {
  
  },
  methods: {
    child_click(val){
      let obj = {label:val.label,value:val.value}
      this.$emit('child_click',obj)
    },
    parent_click(val){
      let obj = {label:val.label,value:val.value}
      this.$emit('parent_click',obj)
    },
    handleMouseover(e,id){
      clearTimeout(this.time)
      this.isShow = true
      if(id){
        this.current_category = this.category.find(item => item.id === id);  
      }
    },
    handleMouseleave(){
      this.time = setTimeout(()=>{
        this.isShow = false
      },0)
    }
  }
};
</script>

