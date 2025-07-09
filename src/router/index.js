import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login/Login.vue";

//创建路由的实例
const router = createRouter({
  // web模式
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',  //路径
      name: 'login',//名称
      component: Login //组件
    },
    {
      path: '/',
      redirect: '/login', //重定向
    },
    {
      path: '/register',
      name: 'register',
      component: ()=>import('@/views/Login/Register.vue')
    },
    {
      path: '/main',//主页
      name: 'main',
      redirect:'/main/home',
      //懒加载
      component: ()=>import('@/views/Main.vue'),
      //配置嵌套路由
      children:[
        {
          path: 'home',//首页
          component:()=>import('@/components/home/Home.vue')
        },
        {
          path: 'user',//用户管理
          component:()=>import('@/components/mgr/User.vue')
        },
        {
          path: 'song',//歌曲管理
          component:()=>import('@/components/song/Song.vue')
        },
        {
          path: 'msg',
          component:()=>import('@/components/msg/SendMsg.vue')
        }
        // ...
      ]
    },

  ],
})

//全局的导航守卫，目的是为了防止用户不登录就访问限制的资源
router.beforeEach((to, from) => {
    //获取从哪里来
    let fromPath = from.path
    console.log('form:',fromPath)
    //获取去哪里
    let toPath = to.path
    console.log('to:',toPath)
    //判断用户是否在访问受限资源
    if(toPath !== '/login' && toPath !=='/register'){
        //获取用户的身份
      let token = localStorage.getItem('token');
      console.log('token:',token);
      if (!token){
        return {path:'/login'}
      }
    }
      //return true// 返回true，意味不拦截，如果返回false，就说明拦截了
      return true


})

export default router
