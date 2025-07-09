<template>
     <el-container>
       <el-aside width="200px"><Main_Nav/></el-aside>
       <el-container>
         <el-header class="main_header"><Main_Header/></el-header>
    <!--    右边部分，需要变化     -->
         <el-main class="main"><RouterView/></el-main>
       </el-container>
     </el-container>
</template>

<script>
import Main_Nav from "@/components/Main_Nav.vue";
import Main_Header from "@/components/Main_Header.vue";
export default {
  name: "Main",
  components: {Main_Nav,Main_Header},
};
</script>

<style scoped >
  .main_header{
    height: 40px;
    margin-bottom: 10px;
    background-color: white;
    box-shadow: 6px 6px 6px #ced4da;
  }
  .main{
   /* margin-left: 20px;*/
  }
</style>
