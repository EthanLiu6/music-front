<script>
import imageUrl from "@/assets/default.png";

export default {
  name: "User",
  data(){
    return{
      imageUrl,
      username: '',
      //测试数据而已
      tableData:[
        {
          id: 9001,
          username: 'jack',
          email:'23121@qq.com',
          phone: '13541092100',
          role: '普通用户',
          createTime: '2025-05-05',
          activation: '正常',
        },
        {
          id: 9002,
          username: 'tom',
          email:'93121@qq.com',
          phone: '13841092100',
          role: '歌手',
          createTime: '2025-06-05',
          activation: '冻结',
        },
      ]
    }
  }
}
</script>
<template>
<div class="container">
<div class="home_header">
  <el-breadcrumb separator="/">
    <el-breadcrumb-item>
      <el-space>
        <el-icon><UserFilled /></el-icon>
        <span>管理中心</span>
      </el-space>
    </el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</div>

<div class="user">
  <el-input type="text" style="width:95%" v-model="username"   placeholder="请输入用户名进行查询"/>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="用户id" width="80"  />
    <el-table-column prop="username" label="用户名" width="80" />
    <el-table-column prop="email" label="邮箱" width="200" />
    <el-table-column prop="phone" label="手机号" width="120" />
    <el-table-column prop="role" label="账户类型" width="120" />
    <el-table-column prop="createTime" label="创建时间" width="120" />
    <el-table-column prop="activation" label="是否冻结" width="80" />
    <el-table-column  label="操作" width="180" >
      <template #default="scope">
        <el-button size="small" type="danger" @click="">
          冻结
        </el-button>
        <el-button
            size="small"
            @click=""
            type="success"
        >
          解冻
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="page">
    <el-pagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[5, 10, 20, 30]"
        :size="size"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    /></div>
</div>
</div>
</template>
<style scoped lang="less">
.container{
  margin-top: -20px;
  margin-left: -20px;
  padding: 0;
}
.home_header {
  box-shadow: 6px 6px 6px #ced4da;
  background-color: #fff;
  margin: 0;
  padding: 10px;
  width: 100%;
  height: 20px;
}
.big_image{
  margin: 20px 0px 0px 10px;
}
.welcome{
  font-size: 16px;
  color: #999;
}
.count p{
  text-align: center;
}
.cards{
  background-color: white;
  margin-right: -20px;
  margin-top: 10px;
  height: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 6px 6px 6px #ced4da;
  div{
    text-align: center;
    span{
      color: blue;
    }
  }
}
.user{
  margin-top: 30px;
  margin-left: 10px;
  padding-left: 20px;
  padding-top: 10px;
  background-color: white;
  box-shadow: 6px 6px 6px #ced4da;
  padding-bottom: 10px;
}
.page{
  width: 50%;
  margin: 10px auto 0;

}
</style>