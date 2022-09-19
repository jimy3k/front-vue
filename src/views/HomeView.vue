<template>
  <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="180">
    </el-table-column>
	<el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
	created() {
		this.getUserList();
	},
	methods:{
		getUserList(){
			this.$axios.get("/getuserlist").then(res =>{
				this.tableData = res.data;
			})
		}
	}
  }
</script>
