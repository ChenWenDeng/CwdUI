(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{349:function(t,i,s){"use strict";s.r(i);var e={name:"m-drag",props:{list:{type:Array,default:()=>[]},list2:{type:Array,default:()=>[]}},data:()=>({enterIndex:"",indexObj:{index1:"",index2:""},listNum:0,isElement:!1,dragstartNum:0,dragenterIndex:0}),methods:{dragend(){},mouseenter(t){if(this.list2.length){if(this.isElement&&1==t&&this.dragstartNum!=t){const t=this.list2[this.indexObj.index2];this.list2.splice(this.indexObj.index2,1),this.list.splice(this.dragenterIndex,0,t)}else if(this.isElement&&2==t&&this.dragstartNum!=t){const t=this.list[this.indexObj.index1];this.list.splice(this.indexObj.index1,1),this.list2.splice(this.dragenterIndex,0,t)}this.isElement=!1}},shuffle(){this.list=this.$shuffle(this.list),this.list2.length&&(this.list2=this.$shuffle(this.list2))},dragstart(t,i){this.listNum=i;let s="index"+this.listNum;this.indexObj[s]=t,this.isElement=!0,this.dragstartNum=i},dragenter(t,i,s){if(this.dragenterIndex=i,t.preventDefault(),1==s&&s==this.listNum){if(this.indexObj.index1!==i){const t=this.list[this.indexObj.index1];this.list.splice(this.indexObj.index1,1),this.list.splice(i,0,t),this.indexObj.index1=i,this.isElement=!1}}else if(2==s&&s==this.listNum){if(this.indexObj.index2!==i){const t=this.list2[this.indexObj.index2];this.list2.splice(this.indexObj.index2,1),this.list2.splice(i,0,t),this.indexObj.index2=i,this.isElement=!1}}else if(2==s&&s!=this.listNum){if(this.indexObj.index2!==i){const t=this.list[this.indexObj.index1];this.list.splice(this.indexObj.index1,1),this.list2.splice(i,0,t),this.indexObj.index2=i,this.listNum=2,this.isElement=!1}}else if(1==s&&s!=this.listNum&&this.indexObj.index1!==i){const t=this.list2[this.indexObj.index2];this.list2.splice(this.indexObj.index2,1),this.list.splice(i,0,t),this.indexObj.index1=i,this.listNum=1,this.isElement=!1}},dragover(t){t.preventDefault()}}},n=s(14),l=Object(n.a)(e,(function(){var t=this,i=t._self._c;return i("div",{staticClass:"d-box"},[t.list.length?i("div",{staticClass:"t-box",on:{mouseenter:function(i){return t.mouseenter(1)}}},[i("transition-group",{staticClass:"list",attrs:{name:"drag",tag:"ul",id:"d1"}},t._l(t.list,(function(s,e){return i("li",{key:s.id,staticClass:"list-item",attrs:{draggable:""},on:{dragenter:function(i){return t.dragenter(i,e,1)},dragover:function(i){return t.dragover(i,e,1)},dragstart:function(i){return t.dragstart(e,1)},dragend:t.dragend}},[t._t("list",null,{items:s})],2)})),0)],1):t._e(),t._v(" "),t.list2.length?i("div",{staticClass:"t-box",on:{mouseenter:function(i){return t.mouseenter(2)}}},[i("transition-group",{staticClass:"list",attrs:{name:"drag",tag:"ul"}},t._l(t.list2,(function(s,e){return i("li",{key:s.id,staticClass:"list-item",attrs:{draggable:""},on:{dragenter:function(i){return t.dragenter(i,e,2)},dragover:function(i){return t.dragover(i,e,2)},dragstart:function(i){return t.dragstart(e,2)},dragend:t.dragend}},[t._t("list2",null,{items:s})],2)})),0)],1):t._e()])}),[],!1,null,null,null);i.default=l.exports}}]);