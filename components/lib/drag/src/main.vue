<template>
  <div class="d-box">
    <div class="t_box" @mouseenter="mouseenter(1)" v-if="list?list.length:false">
      <transition-group
        name="drag"
        class="list"
        tag="ul"
        id="d1"
      >
      <li
          @dragenter="dragenter($event, index,1)"
          @dragover="dragover($event, index,1)"
          @dragstart="dragstart(index,1)"
          @dragend="dragend"
          draggable
          v-for="(item, index) in list"
          :key="item.id"
          class="list-item">
          <slot name="list" :items="item"></slot> 
      </li>
      </transition-group>
    </div>
    <div class="t_box" @mouseenter="mouseenter(2)" v-if="list2?list2.length:false">
      <transition-group
        name="drag"
        class="list"
        tag="ul"
      >
        <li
          @dragenter="dragenter($event, index,2)"
          @dragover="dragover($event, index,2)"
          @dragstart="dragstart(index,2)"
          @dragend="dragend"
          draggable
          v-for="(item, index) in list2"
          :key="item.id"
          class="list-item">
          <slot name="list2" :items="item"></slot> 
        </li>
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  name:'m-drag',
  props:{
    list:Array,
    list2:Array
  },
  data() {
    return {
      enterIndex: '',
      indexObj:{
        index1:'', //第1个数组拖拽的下标
        index2:'' //第2个数组拖拽的下标
      },
      listNum:0,//记录当前是在哪个数组进行拖拽
      isElement:false,//这个开关用于从另一个数组拖拽到另一个数组是否开启某些操作
      dragstartNum:0,//记录源对象在哪个数组
      dragenterIndex:0,//记录进入目标对象的下标位置
    };
  },
  methods: {
    dragend(){
      // console.log('dragend 结束')
    },
    mouseenter(num){
      // console.log(this.list.length,num,this.listNum,'鼠标移入')
      if(this.isElement&&num==1&&this.dragstartNum!=num){
        // console.log('进入mouseenter 11')
        const moving = this.list2[this.indexObj.index2];
        this.list2.splice(this.indexObj.index2, 1);
        this.list.splice(this.dragenterIndex, 0, moving);
      }else if(this.isElement&&num==2&&this.dragstartNum!=num){
        // console.log('进入mouseenter 22')
        const moving = this.list[this.indexObj.index1];
        this.list.splice(this.indexObj.index1, 1);
        this.list2.splice(this.dragenterIndex, 0, moving);
      }
      this.isElement = false
    },
    shuffle() {
      this.list = this.$shuffle(this.list);
      this.list2 = this.$shuffle(this.list2);
    },
    dragstart(index,num) {
      // console.log(index,num,'触发 dragstart11')
      this.listNum = num
      // this.dragIndex = index;
      let indexNum = `index${this.listNum}`
      this.indexObj[indexNum] = index
      // console.log(this.indexObj,'indexObj')
      this.isElement = true
      this.dragstartNum = num
    },
    dragenter(e, index,num) {
      this.dragenterIndex = index
      // console.log(this.listNum,num,'this.listNum num')
      // console.log(e, index,num,'触发 dragenter22')
      e.preventDefault();
      if(num==1&&num==this.listNum){
        // 避免源对象触发自身的dragenter事件
        if (this.indexObj.index1 !== index) {
          const moving = this.list[this.indexObj.index1];
          this.list.splice(this.indexObj.index1, 1);
          this.list.splice(index, 0, moving);
          // 排序变化后目标对象的索引变成源对象的索引
          this.indexObj.index1 = index;
          this.isElement = false
        }
      }else if(num==2&&num==this.listNum){
        // 避免源对象触发自身的dragenter事件
        if (this.indexObj.index2 !== index) {
          const moving = this.list2[this.indexObj.index2];
          this.list2.splice(this.indexObj.index2, 1);
          this.list2.splice(index, 0, moving);
          // 排序变化后目标对象的索引变成源对象的索引
          this.indexObj.index2 = index;
          this.isElement = false
        }
      }else if(num==2&&num!=this.listNum){
        if (this.indexObj.index2 !== index) {
          const moving = this.list[this.indexObj.index1];
          this.list.splice(this.indexObj.index1, 1);
          this.list2.splice(index, 0, moving);
          // 排序变化后目标对象的索引变成源对象的索引
          this.indexObj.index2 = index;
          this.listNum = 2
          this.isElement = false
          // console.log(e,index,num,this.indexObj,'1交叉2')
        }
      }else if(num==1&&num!=this.listNum){
        if (this.indexObj.index1 !== index) {
          const moving = this.list2[this.indexObj.index2];
          this.list2.splice(this.indexObj.index2, 1);
          this.list.splice(index, 0, moving);
          // 排序变化后目标对象的索引变成源对象的索引
          this.indexObj.index1 = index;
          this.listNum = 1
          this.isElement = false
          // console.log(e,index,num,this.indexObj,'2交叉1')
        }
      }
    },
    dragover(e) {
      e.preventDefault();
    },
  },
};
</script>