<template>
  <div class="mirror" :class="position=='left'?'p-left':(position=='right'?'p-right':'')">
    <ul class="picList" :style="position=='top'?{width:width+'px'}:''" v-if="position=='left'||position=='top'">
      <li v-for = "(item,index) in picList" :class="{now:index==picIndex}" :data-index="index" :key ="index" @mouseenter="changeIndex">
       <img :src ="item" />
      </li>
    </ul>
    <div class="wrap" :style="{width:width+'px',height:width+'px'}">
     <div ref="truth" class="img-box" :style="{width:'100%',height:'100%'}" @mousemove="move" @mouseenter="showMagnify" @mouseleave="hideMagnify">
     <div class="mask" ref="mask" v-show = "showMask" :style="{width:width/2+'px',height:width/2+'px',left:maskPosition.x+'px',top:maskPosition.y+'px'}"></div>
     <img :src="picList[picIndex]" draggable="false"/>
     </div>
     <div class="virtual" ref="virtual" v-if = "isShowVirtual" :style="{width:width+'px',height:width+'px'}" >
       <div class="big" ref = "bigPic" :style="{position:'absolute',width:2*width+'px',height:2*width+'px',backgroundSize:'100% 100%',backgroundImage:`url(${picList[picIndex]})`,left:percent.x, top:percent.y}" >
       </div>
     </div>
    </div>
    <ul class="picList" :style="position=='bottom'?{width:width+'px'}:''" v-if="position=='bottom'||position=='right'">
      <li class="img-box" v-for = "(item,index) in picList" :class="{now:index==picIndex}" :data-index="index" :key ="index" @mouseenter="changeIndex">
       <img :src ="item" />
      </li>
    </ul>
  </div>
 </template>

 <script>
 export default {
  name:'m-magnifier',
  props:{
    width: {
      type: Number,
      default: function () {
          return 500
        }
    },
    picList: {
      type: Array,
      default: function () {
          return []
        }
    },
    position: {
      type: String,
      default: function () {
          return 'bottom'
        }
    },
  },
   data(){
    return {
     picIndex:0,
     isShowVirtual:false,
     showMask:false,
     maskPosition:{},
     percent:{},
    }
   },
   methods:{
    computedOffset(obj,prop){ //计算元素到body的绝对位置
    if(obj==document.body || obj.offsetParent == document.body){
     return parseInt(obj[prop])
    }
    return parseInt(obj[prop])+this.computedOffset(obj.offsetParent,prop)
  },
    changeIndex(e){
     this.picIndex = e.target.dataset.index
    },
    showMagnify(){
     this.showMask=true;
     this.isShowVirtual = true;
    },
    hideMagnify(){
     this.isShowVirtual=false;
     this.showMask=false
    },
    computePosition(e){
      let x = e.pageX,y = e.pageY;
      let mask = this.$refs.mask;
      let truth = this.$refs.truth;
      let virtual = this.$refs.virtual;
      let bigPic = this.$refs.bigPic;
      x = x-this.computedOffset(truth,'offsetLeft') -mask.offsetWidth/2;
      y = y-this.computedOffset(truth,'offsetTop')- mask.offsetHeight/2;
     if(x<=0) {
       x=0
      }else if(x>truth.offsetWidth - mask.offsetWidth){
       x = truth.offsetWidth/2
      }
      if(y<=0){
       y=0;
      }
      else if(y>truth.offsetHeight - mask.offsetHeight){
       y = truth.offsetHeight/2
      }

      this.maskPosition = {
       x,y
      }
      //计算比例
      this.percent={
       x:-x/(truth.offsetWidth-mask.offsetWidth)*(bigPic.offsetWidth - virtual.offsetWidth)+'px',
       y:-y/(truth.offsetHeight-mask.offsetHeight)*(bigPic.offsetHeight - virtual.offsetHeight)+'px'
      }
    },
    move(e){
     this.computePosition(e)
    }
  }
  }
</script>