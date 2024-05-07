<template>
  <div class="table-container">
    <div class="table-box">
      <table>
        <thead>
          <tr>
            <th class="check-box">
              <input type="checkbox" v-model="allSelected" @change="toggleAllSelection" />
            </th>
            <th v-for="header in headers" :key="header">{{ header }}</th>
            <th v-if="btnList.length">操作</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="(row, index) in paginatedData" :key="index">
            <td>
              <input type="checkbox" :value="row.id" v-model="selected" @change="updateSelection(row.id)" />
            </td>
            <td>{{ row.id }}</td>  
            <td>{{ row.cells }}</td>  
          </tr> -->
          <tr v-for="(row, index) in paginatedData" :key="index">  
            <td class="check-box"><input type="checkbox" v-model="row.selected" @change="updateSelection(row[checkVal],row)" /></td>  
            <td v-for="(val,index) in propArr" :key="index">{{row[val.prop]}}</td>  
            <td v-if="btnList.length"><button class="btn-style" :style="el.style" v-for="(el) in btnList" :key="el.btn" @click="el.fun(row[checkVal],row)">{{ el.btn }}</button></td>
          </tr>  
        </tbody>
      </table>
    </div>
    <div class="pagination">
      <span>共: {{ totalRows }}条</span>
      <select class="select_page" v-model="rowsPerPage" @change="changeRowsPerPage">
        <option v-for="option in rowsPerPageOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
      <button @click="goToPage(1)">首页</button>
      <button @click="goToPage(currentPage - 1)">&lt;</button>
      <button class="page-button" v-for="page in pageRange" :key="page" @click="goToPage(page)" :class="currentPage==page?'page-color':''">
        {{ page }}
      </button>
      <button @click="goToPage(currentPage + 1)">&gt;</button>
      <button @click="goToPage(totalPages)">尾页</button>
      <span>前往</span>
      <input type="number" min="1" :max="Math.ceil(totalRows/rowsPerPage)" v-model.number="pageInput" @keyup.enter="goToPage(pageInput)" />
      <span>页</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-table',
  props: {
    headers: Array,
    tableData: Array,
    checkVal: {
      type: String,
      default: 'id',
    },
    btnList:Array
  },
  data() {
    return {
      rowsPerPage: 10,
      currentPage: 1,
      selected: [],
      allSelected: false,
      pageInput: 1,
      rowsPerPageOptions: [5, 10, 15],
      propArr:[],
      checkArr:[]
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.tableData.length / this.rowsPerPage);
    },
    pageRange() {
      const range = [];
      for (let i = 1; i <= this.totalPages; i++) {
        range.push(i);
      }
      return range;
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      const end = this.currentPage * this.rowsPerPage;
      return this.tableData.slice(start, end).map((row) => {
        return {
          ...row,
          selected: this.selected.includes(row[this.checkVal]),
        };
      });
    },
    totalRows() {
      return this.tableData.length;
    },
  },
  mounted(){
    this.propArr = this.headers.map((value) => ({  
      prop: value, // 将数组元素作为key属性的值    
    })); 
  },
  methods: {
    uniqueObjectsByProperty(arr, key) {  
      const uniqueSet = new Set();  
      const uniqueArray = [];  
      
      for (let i = 0; i < arr.length; i++) {  
        const item = arr[i];  
        const keyValue = item[key];  
      
        if (!uniqueSet.has(keyValue)) {  
          uniqueSet.add(keyValue);  
          uniqueArray.push(item);  
        }  
      }  
      
      return uniqueArray;  
    },
    get_checkArr(){
      this.checkArr = this.uniqueObjectsByProperty(this.checkArr,this.checkVal+'')
      this.checkArr.sort((a,b)=>{
        return a[this.checkVal] - b[this.checkVal]
      })
      this.$emit('get-checkArr',this.checkArr,this.checkVal+'')
    },
    get_selected(){
      this.selected = [...new Set(this.selected)]
      this.selected.sort((a, b) => a - b)
      this.$emit('get-selected',this.selected)
    },
    toggleAllSelection() {
      // this.allSelected
      //   ? (this.selected = this.paginatedData.map((row) => row.id))
      //   : (this.selected = []);
      if(this.allSelected){
        this.paginatedData.forEach(row => {
          this.selected.push(row[this.checkVal])
          this.checkArr.push(row)
        })
      }else{
        this.paginatedData.forEach((row) => {
          const index = this.selected.indexOf(row[this.checkVal]);
          this.selected.splice(index, 1);
          this.checkArr.splice(index, 1)
        })
      }

      this.get_checkArr()
      this.get_selected()
    },
    updateSelection(id,row) {
      const index = this.selected.indexOf(id);
      if (index === -1) {
        this.selected.push(id);
        this.checkArr.push(row)
      } else {
        this.selected.splice(index, 1);
        this.checkArr.splice(index, 1)
      }
      this.isAllSelected()
      this.get_checkArr()
      this.get_selected()
    },
    goToPage(page) {
      if (page < 1 || page > this.totalPages) {
        return;
      }
      this.currentPage = page;
    },
    changeRowsPerPage() {
      this.currentPage = 1;
      this.isAllSelected()
    },
    //判断是否全选
    isAllSelected(){
      this.allSelected = this.paginatedData.every(obj => obj.selected === true);
    }
  },
  watch: {
    currentPage() {
      this.isAllSelected()
      // this.allSelected = false;
    },
    rowsPerPage() {
      this.currentPage = 1;
    },
  },
};
</script>