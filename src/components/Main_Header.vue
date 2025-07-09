<script>
import defaultImg from '@/assets/default.png'
export default {
  name: "Main_Header",
  data(){
    return {
      defaultImg, //默认头像
      username: '',
      imageUrl: '',
    }
  },
  methods:{
    logout(){
      localStorage.clear();//清空本地存储
      this.$router.push('/login')
    }
  },
  //生命周期钩子函数
  mounted() {
      //获取用户名和头像
      this.username = localStorage.getItem('username')
      this.imageUrl = localStorage.getItem('imageUrl')
  }
}
</script>

<template>
  <div>
    <el-row >
        <el-col class="nav_header" :span="2" :offset="22">
          <el-space>
          <el-avatar :size="24" fit="cover" :src="imageUrl!==null?imageUrl:defaultImg" />
          <el-dropdown trigger="click" >
            <span>
              {{username}}
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item><el-icon><Setting /></el-icon><span>个人设置</span></el-dropdown-item>
                <el-dropdown-item @click="logout"><el-icon><SwitchButton /></el-icon><span>退出登录</span></el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          </el-space>
        </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="less">
  .nav_header{
    margin-top: 10px;
  }
</style>