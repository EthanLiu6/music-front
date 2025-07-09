<script>
export default {
  name: "Main_Nav"
}
</script>

<template>
  <div class="slider">
    <el-menu router
        unique-opened
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
        @open=""
        @close=""
    >
      <el-menu-item class="title"  >
        <img src="@/assets/logo.png" alt="" />
        <span>悦享音乐</span>
      </el-menu-item>
      <el-menu-item index="1" :route="{path:'/main/home'}" >
        <template #title>
          <el-icon><HomeFilled /></el-icon>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-sub-menu index="2" >
        <template #title>
          <el-icon><HelpFilled /></el-icon>
          <span>管理中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" :route="{path:'/main/user'}">
            <template #title>
              <el-icon><UserFilled /></el-icon>
              <span>用户管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2-2" :route="{path:'/main/song'}">
            <template #title>
              <el-icon><Headset /></el-icon>
              <span>歌曲管理</span></template></el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>

      <el-sub-menu index="3">
        <template #title>
          <el-icon><List /></el-icon>
          <span>消息中心</span>
        </template>
        <el-menu-item index="3-1" :route="{path:'/main/msg'}">
          <el-icon><Promotion /></el-icon>
          <span>发布消息</span>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon><Tools /></el-icon>
          <span>基本设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">
            <el-icon><Shop /></el-icon>
            <span>个人设置</span>
          </el-menu-item>
          <el-menu-item index="4-2">
            <el-icon><WarningFilled /></el-icon>
            <span>安全设置</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped lang="less">

.slider{
  width: 200px;
  height: 100vh;
  background-color: #545c64;

}
.title {
  height: 60px;
  line-height: 60px;
  padding-left: 30px;
  background-color: #2f4050;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  span {
    font-size: 20px;
    color: #fff;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>