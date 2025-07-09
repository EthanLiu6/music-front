<script>
import imageUrl from '@/assets/default.png'
export default {
  name: "Home",
  data(){
    return{
      imageUrl,
      userCount: 0,
      singerCount: 0,
      musicCount: 0,
      tableData: [],
      greeting: '',
    }
  },
  created() {
    // 根据当前时间设置问候语
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greeting = '早上好';
    } else if (hour < 18) {
      this.greeting = '下午好';
    } else {
      this.greeting = '晚上好';
    }
    // 获取首页统计数据和日志
    this.fetchHomeData();
  },
  methods: {
    async fetchHomeData() {
      // 假设后端接口为 /api/home/statistics，返回结构如下：
      // { userCount: 120, singerCount: 40, musicCount: 210, logsList: [{username, date, operation}, ...] }
      try {
        const res = await fetch('/api/home/statistics');
        const result = await res.json();
        if (result.code === 20000 && result.data) {
          this.userCount = result.data.userCount;
          this.singerCount = result.data.singerCount;
          this.musicCount = result.data.musicCount;
          // 适配后端logList字段
          this.tableData = result.data.logList || [];
        } else {
          this.userCount = 0;
          this.singerCount = 0;
          this.musicCount = 0;
          this.tableData = [];
        }
      } catch (e) {
        // 可根据需要处理异常
        this.userCount = 0;
        this.singerCount = 0;
        this.musicCount = 0;
        this.tableData = [];
      }
    },
    handleSizeChange() {},
    handleCurrentChange() {},
  }
}
</script>

<template>
  <div class="container">
    <div class="home_header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
      </el-breadcrumb>
      <el-space :size="20">
        <div class="big_image">
          <el-image style="width: 60px; height: 60px" :src="imageUrl" fit="fit" />
        </div>
        <div class="welcome">
          <span>{{ greeting }}</span><br>
          <span>Hi～～～欢迎来到Fright For Dream开发的享悦音乐</span>
        </div>
      </el-space>
    </div>
    <el-row class="cards" justify="space-evenly">
       <el-col :span="6">
         <el-card style="height: 80px">
           <div>用户数量<br/><span>{{ userCount }}</span></div>
         </el-card>
       </el-col>
        <el-col :span="6">
          <el-card style="height: 80px">
            <div>歌手数量<br/><span>{{ singerCount }}</span></div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="height: 80px">
            <div>歌曲数量<br/><span>{{ musicCount }}</span></div>
          </el-card>
        </el-col>
    </el-row>
    <div class="log">
      <h4>日志</h4>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="userName" label="用户" width="180" />
        <el-table-column prop="doSome" label="操作" width="180" />
        <el-table-column prop="createDate" label="时间" />
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
    height: 90px;
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
  .log{
    margin-top: 10px;
    margin-left: 10px;
    padding-left: 10px;
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