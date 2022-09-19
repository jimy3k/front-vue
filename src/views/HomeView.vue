<template>
  <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary" @click="onHello()">主要按钮</el-button>
    <el-button type="success" @click="onHello()">成功按钮</el-button>
    <el-button type="info" @click="onHello()">信息按钮</el-button>
    <el-button type="warning" @click="onHello()">警告按钮</el-button>
    <el-button type="danger" @click="onHello()">危险按钮</el-button>
  </el-row>
</template>

<script>
  export default {
    name: 'HomeView',
    data(){
      return{
        name: ''
      }
    },
    methods:{
      onHello(){
        this.$axios.get("/hello").then(res =>{
          console.log(res);
        })
      }  
    },
  }
</script>
